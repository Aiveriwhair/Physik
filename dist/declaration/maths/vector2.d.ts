export declare class vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    length(): number;
    normalize(): vector2;
    static add(vec1: vector2, vec2: vector2): vector2;
    static substract(vec1: vector2, vec2: vector2): vector2;
    static multiply(vec: vector2, n: number): vector2;
    static divide(vec: vector2, n: number): vector2;
    static dot(vec1: vector2, vec2: vector2): number;
    negativ(): vector2;
    floor(): vector2;
    nullify(): void;
    static nullVector(): vector2;
    log(): void;
}
