import { vector3 } from "../maths/vector3.js";
export class Object3D {
    constructor() {
        this.EnergyLossOnCollision = 0.8;
        this.RenderColor = 'black';
        this.Mass = 0;
        this.Velocity = vector3.nullVector();
        this.Force = vector3.nullVector();
        this.Transform = {
            Position: vector3.nullVector(),
            Scale: vector3.nullVector(),
            Rotation: vector3.nullVector()
        };
        this.Collider = null;
    }
}
