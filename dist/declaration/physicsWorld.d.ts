import { object2D } from "./object2D.js";
export declare class physicsWorld2D {
    maxObject: number;
    private objects;
    private gravity;
    constructor();
    addObject(newObject: object2D): void;
    removeObject(object: object2D): void;
    step(dt: number): void;
    render(canvas: HTMLCanvasElement): void;
}
