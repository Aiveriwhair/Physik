import { vector2 } from "../../maths/vector2.js";
import { Collider2D } from "./Collider2D.js";
import { PlaneCollider } from "./PlaneCollider.js";
import { FindCollisionPoints } from "./FindCollisionPoints.js";
export class CircleCollider extends Collider2D {
    constructor(radius) {
        super();
        this.Radius = radius;
    }
    testCollision(transform, collider, colliderTransform) {
        //return collider.testCollision(colliderTransform, th is, transform);
        if (collider instanceof CircleCollider)
            return this.testCollisionCircle(colliderTransform, collider, transform);
        else if (collider instanceof PlaneCollider)
            return this.testCollisionPlane(colliderTransform, collider, transform);
        else
            return {
                A: vector2.nullVector(),
                B: vector2.nullVector(),
                depth: 0,
                normal: vector2.nullVector(),
                hasCollision: false
            };
    }
    testCollisionCircle(transform, circleCollider, circleTransform) {
        return FindCollisionPoints.CircleCircle(this, transform, circleCollider, circleTransform);
    }
    testCollisionPlane(transform, planecollider, planeTransform) {
        return FindCollisionPoints.CirclePlane(this, transform, planecollider, planeTransform);
    }
}
