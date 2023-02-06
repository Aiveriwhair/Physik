import { object2D } from "./object2D.js";
import { physicsWorld2D } from "./physicsWorld2D.js";

export type ObjZone = object2D[];
export type WorldZones = ObjZone[];

export type Zone = {
    topleftx:number,
    toplefty:number,
    width:number,
    height:number
}


export class WorldDivider{
    private m_world: physicsWorld2D;

    constructor(world:physicsWorld2D){
        this.m_world = world;
    }

    public isObjectInZone(obj:object2D, zone:Zone):boolean{
        if(obj.Transform.Position.x >= zone.topleftx && obj.Transform.Position.x <= zone.topleftx + zone.width 
            && obj.Transform.Position.y >= zone.toplefty && obj.Transform.Position.y <= zone.toplefty + zone.height)
            return true;
        return false;
    }
    public divideWorldEqually(nbZone: number): WorldZones {
        let elems = [...this.m_world.objects];
        let res: WorldZones = [];
        for (let i = 0; i < nbZone; i++) {
            for (let j = 0; j < nbZone; j++) {
                let tab: ObjZone = [];
                let Currentzone: Zone = {
                    topleftx: this.m_world.canvas.width / nbZone * i,
                    toplefty: this.m_world.canvas.height / nbZone * j,
                    width: this.m_world.canvas.width / nbZone,
                    height: this.m_world.canvas.height / nbZone
                }
                for (const elem of elems) {
                    if (this.isObjectInZone(elem, Currentzone)) {
                        tab.push(elem);
                        elems.splice(elems.indexOf(elem, 1), 1);
                    }
                }
                res.push(tab);
            }
        }
        return res;
    }

    public noDivision():WorldZones{
        let tab:ObjZone = []
        for(const a of this.m_world.objects){
            tab.push(a);
        }
        let res:WorldZones = [tab];
        return res;
    }
}