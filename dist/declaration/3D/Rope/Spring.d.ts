import { Object3D } from "../Object3D.js";
export declare class Spring {
    Mass1: Object3D;
    Mass2: Object3D;
    springConstant: number;
    springLength: number;
    frictionConstant: number;
    constructor(m1: Object3D, m2: Object3D, spgCte: number, spgLgt: number, frctCte: number);
    solve(): void;
}
