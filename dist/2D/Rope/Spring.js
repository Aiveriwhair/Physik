import { vector3 } from "../../maths/vector3.js";
export class Spring {
    constructor(m1, m2, spgCte, spgLgt, frctCte) {
        this.Mass1 = m1;
        this.Mass2 = m2;
        this.springConstant = spgCte;
        this.springLength = spgLgt;
        this.frictionConstant = frctCte;
    }
    solve() {
        vector3;
    }
}
