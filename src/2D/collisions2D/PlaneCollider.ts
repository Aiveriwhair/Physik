import { vector2 } from "../../maths/vector2.js";
import { Transform2D } from "../Transform2D.js";
import { CircleCollider } from "./CircleCollider.js";
import { Collider2D } from "./Collider2D.js";
import { CollisionPoints } from "./CollisionPoints.js";
import { FindCollisionPoints } from "./FindCollisionPoints.js";

export class PlaneCollider extends Collider2D{
    Plane:vector2;
    Distance:number;

    constructor(plane:vector2, distance:number){
        super();
        this.Plane = plane;
        this.Distance = distance;
    }

    override testCollision(transform:Transform2D, collider:Collider2D, colliderTransform:Transform2D):CollisionPoints{
        return collider.testCollision(colliderTransform, this, transform);
    }
    override testCollisionCircle(transform:Transform2D, circleCollider:CircleCollider, circleTransform:Transform2D):CollisionPoints{
        return FindCollisionPoints.PlaneCircle(this, transform, circleCollider, circleTransform);
    }

    override testCollisionPlane(transform: Transform2D, planecollider: PlaneCollider, planeTransform: Transform2D): CollisionPoints {
        let res:CollisionPoints = {
            A : vector2.nullVector(),
            B : vector2.nullVector(),
            normal : vector2.nullVector(),
            depth : 0,
            hasCollision : false
        };
        return res;
    }
}