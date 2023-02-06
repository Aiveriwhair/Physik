import { vector2 } from './maths/vector2.js';
import { Drawer } from "./Drawer.js";
//https://www.google.com/search?q=how+to+code+a+physics+engine&sxsrf=ALiCzsYKgNRORariYUggSiME7A44Luhg_A%3A1652139273175&ei=CaV5Yo2jCoiIaa7Yvwg&ved=0ahUKEwjNy_yzytP3AhUIRBoKHS7sDwEQ4dUDCA4&uact=5&oq=how+to+code+a+physics+engine&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMsBOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6BwgjEOoCECc6BAgjECc6BggjECcQEzoLCAAQgAQQsQMQgwE6BAgAEEM6EQguEIAEELEDEIMBEMcBEKMCOgcILhDUAhBDOgUIABCABDoFCC4QgAQ6FAguEIAEELEDEIMBEMcBEKMCENQCOggILhCABBCxAzoLCC4QgAQQsQMQ1AI6CwguELEDEIMBENQCOggIABCABBCxAzoKCAAQgAQQhwIQFDoGCAAQFhAeOggIABAWEAoQHkoECEEYAEoECEYYAVD8DlihL2CRMGgDcAF4AYABogGIAcMXkgEENy4yMZgBAKABAbABCsgBEsABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz#kpvalbx=_FKV5YoyHBcuIadbtq7gI13
export class physicsWorld2D {
    constructor() {
        this.maxObject = 50;
        this.gravity = new vector2(0, 9.81);
        this.objects = [];
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
    step(dt) {
        this.objects.forEach((element) => {
            element.Force = vector2.add(vector2.multiply(this.gravity, element.Mass), element.Force);
            element.Velocity = vector2.add(vector2.multiply(vector2.divide(element.Force, element.Mass), dt), element.Velocity);
            element.Position = vector2.add(vector2.multiply(element.Velocity, dt), element.Position);
            element.Force = vector2.nullVector();
        });
    }
    render(canvas) {
        let drawer = new Drawer(canvas);
        drawer.clear();
        this.objects.forEach((element) => {
            if (element.Position.x > 0 && element.Position.x < window.innerWidth) {
                if (element.Position.y > 0 && element.Position.y < window.innerHeight) {
                    drawer.DrawCircle(element.Position.x, element.Position.y, 30, 'false', 'none', 0);
                    console.log("Drawing");
                }
            }
        });
    }
}
