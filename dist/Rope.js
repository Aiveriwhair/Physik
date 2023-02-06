"use strict";
//Mathematics to build a rope / cloths simulation :
// https://owlree.blog/posts/simulating-a-rope.html
// https://www.physagreg.fr/mecanique-11-chute-libre.php
class GravityObject {
    constructor(CoordX, CoordY, AccelX, AccelY, SpeedX, SpeedY) {
        this.CoordX = CoordX;
        this.CoordY = CoordY;
        this.AccelX = AccelX;
        this.AccelY = AccelY;
        this.SpeedX = SpeedX;
        this.SpeedY = SpeedY;
    }
    posAt(t) {
        const x = this.CoordX + 1 / 2 * this.AccelX * t;
        const y = this.CoordY + 1 / 2 * this.AccelY * t;
    }
}
