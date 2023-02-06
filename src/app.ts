import { physicsWorld2D } from "./2D/physicsWorld2D.js";
import { object2D } from "./2D/object2D.js";
import { vector2 } from "./maths/vector2.js";
import { CircleCollider } from "./2D/collisions2D/CircleCollider.js";

//https://blog.winter.dev/2020/designing-a-physics-engine/

let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
canvas.height = window.innerHeight * 0.8;
canvas.width = window.innerWidth * 0.8;


let world = new physicsWorld2D(canvas);

let RENDERCOLOR = ['blue', 'green', 'yellow', 'black', 'grey', 'lightblue', 'purple'];
canvas.addEventListener("click", (e)=>{
    let a = new object2D();
    var rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let pos1 = new vector2(x, y);
    a.Mass = 10;
    a.Collider = new CircleCollider(a.Mass) as CircleCollider;
    a.Transform = {
        Position : pos1,
        Scale : vector2.nullVector(),
        Rotation : 0
    }
    a.EnergyLossOnCollision = 1;
    a.RenderColor = RENDERCOLOR[Math.round(Math.random() * 7)];
    let plusOrMinusX = Math.random() < 0.5 ? -1 : 1;
    let plusOrMinusY = Math.random() < 0.5 ? -1 : 1;
    a.Velocity = new vector2(Math.random()*1*plusOrMinusX, Math.random()*1*plusOrMinusY)
    
    world.addObject(a);
})

let btn = document.querySelector("#reset-btn") as HTMLButtonElement;
btn.addEventListener("click", ()=>{
    world.reset();
})





let lastUpdate = Date.now();
let Update = function(){
    let now = Date.now();
    let dt = now - lastUpdate;
    lastUpdate = now;
    world.render();
    world.step(dt * 0.01);
    console.log(1/(dt*0.001));
    requestAnimationFrame(Update);
}
requestAnimationFrame(Update);