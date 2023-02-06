import { vector3 } from "../../maths/vector3.js";
//https://nehe.gamedev.net/tutorial/rope_physics/17006/
export class Spring {
    constructor(m1, m2, spgCte, spgLgt, frctCte) {
        this.Mass1 = m1;
        this.Mass2 = m2;
        this.springConstant = spgCte;
        this.springLength = spgLgt;
        this.frictionConstant = frctCte;
    }
    solve() {
        let spgVector = vector3.substract(this.Mass1.Transform.Position, this.Mass2.Transform.Position);
        let r = spgVector.length();
        let Force = vector3.nullVector();
        if (r != 0)
            Force = vector3.add(Force, vector3.multiply(vector3.divide(spgVector, -r), (r - this.springLength) * this.springConstant));
        this.Mass1.Force = Force;
        this.Mass2.Force = this.Mass2.Force.negativ();
    }
}
