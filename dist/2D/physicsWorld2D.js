import { vector2 } from '../maths/vector2.js';
import { Drawer } from "../Drawer.js";
import { CollisionSolver } from './CollisionSolver.js';
import { WorldDivider } from "./WorldDivider.js";
//https://www.google.com/search?q=how+to+code+a+physics+engine&sxsrf=ALiCzsYKgNRORariYUggSiME7A44Luhg_A%3A1652139273175&ei=CaV5Yo2jCoiIaa7Yvwg&ved=0ahUKEwjNy_yzytP3AhUIRBoKHS7sDwEQ4dUDCA4&uact=5&oq=how+to+code+a+physics+engine&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6BwgjEOoCECc6BAgjECc6BggjECcQEzoLCAAQgAQQsQMQgwE6BAgAEEM6EQguEIAEELEDEIMBEMcBEKMCOgcILhDUAhBDOgUIABCABDoFCC4QgAQ6FAguEIAEELEDEIMBEMcBEKMCENQCOggILhCABBCxAzoLCC4QgAQQsQMQ1AI6CwguELEDEIMBENQCOggIABCABBCxAzoKCAAQgAQQhwIQFDoGCAAQFhAeOggIABAWEAoQHkoECEEYAEoECEYYAVD8DlihL2CRMGgDcAF4AYABogGIAcMXkgEENy4yMZgBAKABAbABCsgBEsABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz#kpvalbx=_FKV5YoyHBcuIadbtq7gI13
export class physicsWorld2D {
    constructor(canvas) {
        this.maxObject = 10000;
        this.gravity = new vector2(0, 9.81);
        this.objects = [];
        this.canvas = canvas;
    }
    addObject(newObject) {
        if ((this.objects.length >= this.maxObject))
            this.objects.splice(0, 1);
        this.objects.push(newObject);
    }
    removeObject(object) {
        this.objects.forEach((element, index) => {
            if (element == object)
                this.objects.splice(index, 1);
        });
    }
    reset() {
        this.objects = [];
    }
    step(dt) {
        this.resolveCollisions(dt);
        for (const element of this.objects) {
            element.Force = vector2.add(vector2.multiply(this.gravity, element.Mass), element.Force);
            element.Velocity = vector2.add(vector2.multiply(vector2.divide(element.Force, element.Mass), dt), element.Velocity);
            element.Transform.Position = vector2.add(vector2.multiply(element.Velocity, dt), element.Transform.Position);
            element.Force = vector2.nullVector();
        }
        this.resolveWindowCollision();
    }
    resolveCollisions(dt) {
        let collisions = [];
        let divider = new WorldDivider(this);
        let wlZones = divider.noDivision();
        for (const zone of wlZones) {
            for (const a of zone) {
                for (const b of zone) {
                    if (a == b)
                        break;
                    if (!a.Collider || !b.Collider) {
                        continue;
                    }
                    let points = a.Collider.testCollision(a.Transform, b.Collider, b.Transform);
                    if (points.hasCollision == true) {
                        let Collision = {
                            objA: a,
                            objB: b,
                            Points: points
                        };
                        collisions.push(Collision);
                    }
                }
            }
        }
        //Solve collisions  
        //https://physique.cmaisonneuve.qc.ca/svezina/nya/note_nya/NYA_XXI_Chap%203.11b.pdf Collision 2D 
        let solver = new CollisionSolver();
        for (const coll of collisions) {
            solver.resolveCollision2D(coll);
        }
    }
    resolveWindowCollision() {
        for (let a of this.objects) {
            if (!a.Collider) {
                continue;
            }
            if (a.Transform.Position.x - a.Collider.Radius <= 0) {
                a.Velocity.x = -a.Velocity.x * a.EnergyLossOnCollision;
                a.Transform.Position.x = a.Collider.Radius + 1;
            }
            if (a.Transform.Position.x + a.Collider.Radius >= this.canvas.width) {
                a.Velocity.x = -a.Velocity.x * a.EnergyLossOnCollision;
                a.Transform.Position.x = this.canvas.width - a.Collider.Radius - 1;
            }
            if (a.Transform.Position.y - a.Collider.Radius <= 0) {
                a.Velocity.y = -a.Velocity.y * a.EnergyLossOnCollision;
                a.Transform.Position.y = a.Collider.Radius + 1;
                a.Velocity.y -= this.gravity.y;
            }
            if (a.Transform.Position.y + a.Collider.Radius >= this.canvas.height) {
                a.Velocity.y = -a.Velocity.y * a.EnergyLossOnCollision;
                a.Transform.Position.y = this.canvas.height - a.Collider.Radius - 1;
            }
        }
    }
    render() {
        let drawer = new Drawer(this.canvas);
        drawer.clear();
        for (const element of this.objects)
            drawer.DrawCircle(element.Transform.Position.x, element.Transform.Position.y, element.Collider.Radius, element.RenderColor, 'none', 0);
    }
    //Fonction de déboguage
    printWorldTotalSpeed() {
        let sum = 0;
        for (const obj of this.objects) {
            sum += obj.Velocity.length();
        }
        console.log("Somme des vitesse =", sum);
    }
}
