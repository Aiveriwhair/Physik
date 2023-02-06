import { object2D } from "./object2D.js";
import { physicsWorld2D } from "./physicsWorld2D.js";
export declare type ObjZone = object2D[];
export declare type WorldZones = ObjZone[];
export declare type Zone = {
    topleftx: number;
    toplefty: number;
    width: number;
    height: number;
};
export declare class WorldDivider {
    private m_world;
    constructor(world: physicsWorld2D);
    isObjectInZone(obj: object2D, zone: Zone): boolean;
    divideWorldEqually(nbZone: number): WorldZones;
    noDivision(): WorldZones;
}
