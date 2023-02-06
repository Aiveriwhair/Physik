import { object2D } from "./object2D.js";
import { vector2 } from '../maths/vector2.js';
export declare class physicsWorld2D {
    canvas: HTMLCanvasElement;
    maxObject: number;
    gravity: vector2;
    objects: object2D[];
    constructor(canvas: HTMLCanvasElement);
    addObject(newObject: object2D): void;
    removeObject(object: object2D): void;
    reset(): void;
    step(dt: number): void;
    resolveCollisions(dt: number): void;
    resolveWindowCollision(): void;
    render(): void;
    printWorldTotalSpeed(): void;
}
