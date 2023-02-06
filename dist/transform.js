import { vector2 } from "./maths/vector2.js";
import { Quaternion } from "./Quaternion.js";
class Transform {
    constructor() {
        this.Position = vector2.nullVector();
        this.Scale = vector2.nullVector();
        this.Rotation = new Quaternion();
    }
}
