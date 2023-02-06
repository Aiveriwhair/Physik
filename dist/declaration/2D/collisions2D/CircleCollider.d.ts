import { Transform2D } from "../Transform2D.js";
import { Collider2D } from "./Collider2D.js";
import { PlaneCollider } from "./PlaneCollider.js";
import { CollisionPoints } from "./CollisionPoints.js";
export declare class CircleCollider extends Collider2D {
    Radius: number;
    constructor(radius: number);
    testCollision(transform: Transform2D, collider: Collider2D, colliderTransform: Transform2D): CollisionPoints;
    testCollisionCircle(transform: Transform2D, circleCollider: CircleCollider, circleTransform: Transform2D): CollisionPoints;
    testCollisionPlane(transform: Transform2D, planecollider: PlaneCollider, planeTransform: Transform2D): CollisionPoints;
}
