import { vector2 } from "../../maths/vector2.js";
export class FindCollisionPoints {
    static areColliding(a, ta, b, tb) {
        let distX = ta.Position.x - tb.Position.x;
        let distY = ta.Position.y - tb.Position.y;
        let dist = Math.sqrt(distX * distX + distY * distY);
        if (dist <= a.Radius + b.Radius)
            return true;
        return false;
    }
    static CircleCircle(a, ta, b, tb) {
        let vec = new vector2(tb.Position.x - ta.Position.x, tb.Position.y - ta.Position.y);
        let distBetweenCenters = vec.length();
        let depth = Math.abs((a.Radius + b.Radius) - distBetweenCenters);
        let res = {
            A: new vector2(ta.Position.x + vec.x * a.Radius, ta.Position.y + vec.y * a.Radius),
            B: new vector2(tb.Position.x - vec.x * b.Radius, tb.Position.y - vec.y * b.Radius),
            normal: vec,
            depth: depth,
            hasCollision: this.areColliding(a, ta, b, tb)
        };
        return res;
    }
    static CirclePlane(a, ta, b, tb) {
        let res = {
            A: vector2.nullVector(),
            B: vector2.nullVector(),
            normal: vector2.nullVector(),
            depth: 0,
            hasCollision: false
        };
        return res;
    }
    static PlaneCircle(a, ta, b, tb) {
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
