export class WorldDivider {
    constructor(world) {
        this.m_world = world;
    }
    isObjectInZone(obj, zone) {
        if (obj.Transform.Position.x >= zone.topleftx && obj.Transform.Position.x <= zone.topleftx + zone.width
            && obj.Transform.Position.y >= zone.toplefty && obj.Transform.Position.y <= zone.toplefty + zone.height)
            return true;
        return false;
    }
    divideWorldEqually(nbZone) {
        let elems = [...this.m_world.objects];
        let res = [];
        for (let i = 0; i < nbZone; i++) {
            for (let j = 0; j < nbZone; j++) {
                let tab = [];
                let Currentzone = {
                    topleftx: this.m_world.canvas.width / nbZone * i,
                    toplefty: this.m_world.canvas.height / nbZone * j,
                    width: this.m_world.canvas.width / nbZone,
                    height: this.m_world.canvas.height / nbZone
                };
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
    noDivision() {
        let tab = [];
        for (const a of this.m_world.objects) {
            tab.push(a);
        }
        let res = [tab];
        return res;
    }
}
