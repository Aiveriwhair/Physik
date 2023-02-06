import { vector2 } from './maths/vector2.js';
export declare class object2D {
    Name: string;
    Mass: number;
    Position: vector2;
    Velocity: vector2;
    Force: vector2;
    constructor(name: string, mass: number);
}
