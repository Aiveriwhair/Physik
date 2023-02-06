import { vector2 } from '../maths/vector2.js';
import { Transform2D } from './Transform2D.js';
import { CircleCollider } from './collisions2D/CircleCollider';
export declare class object2D {
    Mass: number;
    Velocity: vector2;
    Force: vector2;
    Transform: Transform2D;
    EnergyLossOnCollision: number;
    Collider: CircleCollider | null;
    RenderColor: string;
    constructor();
}
