import { CircleCollider } from "../2D/collisions2D/CircleCollider.js";
import { vector3 } from "../maths/vector3.js";
import { Transform3D } from "./Transform3D.js";
export declare class Object3D {
    Mass: number;
    Velocity: vector3;
    Force: vector3;
    Transform: Transform3D;
    EnergyLossOnCollision: number;
    Collider: CircleCollider | null;
    RenderColor: string;
    constructor();
}
