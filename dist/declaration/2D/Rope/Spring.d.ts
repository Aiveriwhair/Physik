import { object2D } from "../object2D.js";
export declare class Spring {
    Mass1: object2D;
    Mass2: object2D;
    springConstant: number;
    springLength: number;
    frictionConstant: number;
    constructor(m1: object2D, m2: object2D, spgCte: number, spgLgt: number, frctCte: number);
    solve(): void;
}
