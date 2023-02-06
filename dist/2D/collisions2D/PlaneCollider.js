import { vector2 } from "../../maths/vector2.js";
import { Collider2D } from "./Collider2D.js";
import { FindCollisionPoints } from "./FindCollisionPoints.js";
export class PlaneCollider extends Collider2D {
    constructor(plane, distance) {
        super();
        this.Plane = plane;
        this.Distance = distance;
    }
    testCollision(transform, collider, colliderTransform) {
        return collider.testCollision(colliderTransform, this, transform);
    }
    testCollisionCircle(transform, circleCollider, circleTransform) {
        return FindCollisionPoints.PlaneCircle(this, transform, circleCollider, circleTransform);
    }
    testCollisionPlane(transform, planecollider, planeTransform) {
        let res = {
            A: vector2.nullVector(),
            B: vector2.nullVector(),
            normal: vector2.nullVector(),
            depth: 0,
            hasCollision: false
        };
        return res;
    }
}
