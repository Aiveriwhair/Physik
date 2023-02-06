import { Transform2D } from "../Transform2D.js";
import { CircleCollider } from "./CircleCollider.js";
import { CollisionPoints } from "./CollisionPoints.js";
import { PlaneCollider } from "./PlaneCollider.js";
export declare class FindCollisionPoints {
    static areColliding(a: CircleCollider, ta: Transform2D, b: CircleCollider, tb: Transform2D): boolean;
    static CircleCircle(a: CircleCollider, ta: Transform2D, b: CircleCollider, tb: Transform2D): CollisionPoints;
    static CirclePlane(a: CircleCollider, ta: Transform2D, b: PlaneCollider, tb: Transform2D): CollisionPoints;
    static PlaneCircle(a: PlaneCollider, ta: Transform2D, b: CircleCollider, tb: Transform2D): CollisionPoints;
}
