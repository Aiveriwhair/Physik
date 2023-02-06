import { vector2 } from "../../maths/vector2.js";
import { Transform2D } from "../Transform2D.js";
import { Collider2D } from "./Collider2D.js";
import { PlaneCollider } from "./PlaneCollider.js";
import { CollisionPoints } from "./CollisionPoints.js";
import { FindCollisionPoints } from "./FindCollisionPoints.js";

export class CircleCollider extends Collider2D{
    Radius : number;

    constructor(radius:number){
        super();
        this.Radius = radius;
    }

    override testCollision(transform:Transform2D, collider:Collider2D, colliderTransform:Transform2D):CollisionPoints{
        //return collider.testCollision(colliderTransform, th is, transform);
        if(collider instanceof CircleCollider)
            return this.testCollisionCircle(colliderTransform, collider, transform);
        else if(collider instanceof PlaneCollider)
            return this.testCollisionPlane(colliderTransform, collider, transform);
        else
            return {
                A:vector2.nullVector(),
                B:vector2.nullVector(),
                depth:0,
                normal:vector2.nullVector(),
                hasCollision:false
            }
    }
    override testCollisionCircle(transform:Transform2D, circleCollider:CircleCollider, circleTransform:Transform2D):CollisionPoints{
        return FindCollisionPoints.CircleCircle(this, transform, circleCollider, circleTransform);
    }
    override testCollisionPlane(transform:Transform2D, planecollider:PlaneCollider, planeTransform:Transform2D):CollisionPoints{
        return FindCollisionPoints.CirclePlane(this, transform, planecollider, planeTransform);
    }
}
