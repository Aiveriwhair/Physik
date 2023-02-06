import { vector2 } from "../../maths/vector2.js";

export type CollisionPoints = {
    A:vector2,
    B:vector2,
    normal:vector2,
    depth:number,
    hasCollision:boolean
}