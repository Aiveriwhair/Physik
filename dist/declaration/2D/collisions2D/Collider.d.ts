import { Transform2D } from "../Transform2D.js";
import { CollisionPoints } from "./CollisionPoints.js";
import { CircleCollider } from "./CircleCollider.js";
import { PlaneCollider } from "./PlaneCollider.js";
export declare abstract class Collider {
    abstract testCollision(transform: Transform2D, collider: Collider, colliderTransform: Transform2D): CollisionPoints;
    abstract testCollisionCircle(transform: Transform2D, circleCollider: CircleCollider, circleTransform: Transform2D): CollisionPoints;
    abstract testCollisionPlane(transform: Transform2D, planecollider: PlaneCollider, planeTransform: Transform2D): CollisionPoints;
}
