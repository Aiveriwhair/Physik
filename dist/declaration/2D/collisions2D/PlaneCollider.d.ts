import { vector2 } from "../../maths/vector2.js";
import { Transform2D } from "../Transform2D.js";
import { CircleCollider } from "./CircleCollider.js";
import { Collider2D } from "./Collider2D.js";
import { CollisionPoints } from "./CollisionPoints.js";
export declare class PlaneCollider extends Collider2D {
    Plane: vector2;
    Distance: number;
    constructor(plane: vector2, distance: number);
    testCollision(transform: Transform2D, collider: Collider2D, colliderTransform: Transform2D): CollisionPoints;
    testCollisionCircle(transform: Transform2D, circleCollider: CircleCollider, circleTransform: Transform2D): CollisionPoints;
    testCollisionPlane(transform: Transform2D, planecollider: PlaneCollider, planeTransform: Transform2D): CollisionPoints;
}
