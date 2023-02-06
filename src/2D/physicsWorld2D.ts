import { object2D } from "./object2D.js";
import { vector2 } from '../maths/vector2.js';
import { Drawer } from "../Drawer.js";
import { Collision2D } from "./collisions2D/Collision2D.js"
import { CollisionPoints } from "./collisions2D/CollisionPoints.js";
import { CollisionSolver } from './CollisionSolver.js';
import { WorldDivider, WorldZones } from "./WorldDivider.js";

//https://www.google.com/search?q=how+to+code+a+physics+engine&sxsrf=ALiCzsYKgNRORariYUggSiME7A44Luhg_A%3A1652139273175&ei=CaV5Yo2jCoiIaa7Yvwg&ved=0ahUKEwjNy_yzytP3AhUIRBoKHS7sDwEQ4dUDCA4&uact=5&oq=how+to+code+a+physics+engine&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6BwgjEOoCECc6BAgjECc6BggjECcQEzoLCAAQgAQQsQMQgwE6BAgAEEM6EQguEIAEELEDEIMBEMcBEKMCOgcILhDUAhBDOgUIABCABDoFCC4QgAQ6FAguEIAEELEDEIMBEMcBEKMCENQCOggILhCABBCxAzoLCC4QgAQQsQMQ1AI6CwguELEDEIMBENQCOggIABCABBCxAzoKCAAQgAQQhwIQFDoGCAAQFhAeOggIABAWEAoQHkoECEEYAEoECEYYAVD8DlihL2CRMGgDcAF4AYABogGIAcMXkgEENy4yMZgBAKABAbABCsgBEsABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz#kpvalbx=_FKV5YoyHBcuIadbtq7gI13



export class physicsWorld2D {
    public canvas: HTMLCanvasElement;
    public maxObject: number = 10000;
    public gravity: vector2 = new vector2(0, 9.81);
    public objects: object2D[];

    constructor(canvas: HTMLCanvasElement) {
        this.objects = [];
        this.canvas = canvas;
    }

    public addObject(newObject: object2D): void {
        if ((this.objects.length >= this.maxObject))
            this.objects.splice(0, 1)
        this.objects.push(newObject);
    }
    public removeObject(object: object2D): void {
        this.objects.forEach((element, index) => {
            if (element == object) this.objects.splice(index, 1);
        })
    }
    public reset(): void {
        this.objects = [];
    }

    public step(dt: number): void {
        for (const element of this.objects) {
            element.Force = vector2.add(vector2.multiply(this.gravity, element.Mass), element.Force);
            element.Velocity = vector2.add(vector2.multiply(vector2.divide(element.Force, element.Mass), dt), element.Velocity);
            element.Transform.Position = vector2.add(vector2.multiply(element.Velocity, dt), element.Transform.Position);
            element.Force = vector2.nullVector();
        }
        this.resolveCollisions(dt);
        this.resolveWindowCollision();
    }

    public resolveCollisions(dt: number): void {
        let collisions: Collision2D[] = [];
        let divider = new WorldDivider(this);
        let wlZones:WorldZones = divider.noDivision()
        for (const zone of wlZones) {
            for (const a of zone) {
                for (const b of zone) {
                    if (a == b) break;
                    if (!a.Collider || !b.Collider) {
                        continue;
                    }
                    let points: CollisionPoints = a.Collider.testCollision(a.Transform, b.Collider, b.Transform);
                    if (points.hasCollision == true) {
                        let Collision: Collision2D = {
                            objA: a,
                            objB: b,
                            Points: points
                        }
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

    public resolveWindowCollision() {
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
                a.Transform.Position.y = a.Collider.Radius + 1
                a.Velocity.y -= this.gravity.y;
            }
            if (a.Transform.Position.y + a.Collider.Radius >= this.canvas.height) {
                a.Velocity.y = -a.Velocity.y * a.EnergyLossOnCollision;
                a.Transform.Position.y = this.canvas.height - a.Collider.Radius - 1
            }
        }
    }

    public render() {
        let drawer = new Drawer(this.canvas);
        drawer.clear();
        for (const element of this.objects)
            drawer.DrawCircle(element.Transform.Position.x, element.Transform.Position.y, element.Collider!.Radius, element.RenderColor, 'none', 0);
    }

    //Fonction de déboguage
    public printWorldTotalSpeed() {
        let sum = 0;
        for (const obj of this.objects) {
            sum += obj.Velocity.length();
        }
        console.log("Somme des vitesse =", sum);
    }
}