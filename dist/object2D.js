import { vector2 } from './maths/vector2.js';
export class object2D {
    constructor(name, mass) {
        this.Name = name;
        this.Mass = mass;
        this.Position = vector2.nullVector();
        this.Velocity = vector2.nullVector();
        this.Force = vector2.nullVector();
    }
}
