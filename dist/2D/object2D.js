import { vector2 } from '../maths/vector2.js';
export class object2D {
    constructor() {
        this.EnergyLossOnCollision = 0.8;
        this.RenderColor = 'black';
        this.Mass = 0;
        this.Velocity = vector2.nullVector();
        this.Force = vector2.nullVector();
        this.Transform = {
            Position: vector2.nullVector(),
            Scale: vector2.nullVector(),
            Rotation: 0
        };
        this.Collider = null;
    }
}
