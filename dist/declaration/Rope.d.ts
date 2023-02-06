declare class GravityObject {
    CoordX: number;
    CoordY: number;
    AccelX: number;
    AccelY: number;
    SpeedX: number;
    SpeedY: number;
    constructor(CoordX: number, CoordY: number, AccelX: number, AccelY: number, SpeedX: number, SpeedY: number);
    posAt(t: number): void;
}
