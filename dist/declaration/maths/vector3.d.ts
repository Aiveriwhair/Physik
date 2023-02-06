export declare class vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    length(): number;
    normalize(): void;
    static add(vec1: vector3, vec2: vector3): vector3;
    static substract(vec1: vector3, vec2: vector3): vector3;
    static multiply(vec: vector3, n: number): vector3;
    static divide(vec: vector3, n: number): vector3;
    static dot(vec1: vector3, vec2: vector3): number;
    negativ(): vector3;
    nullify(): void;
    static nullVector(): vector3;
    log(): void;
}
