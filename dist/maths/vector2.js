export class vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize() {
        this.x /= this.length();
        this.y /= this.length();
        return this;
    }
    //Operations
    static add(vec1, vec2) {
        return new vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    }
    static substract(vec1, vec2) {
        return new vector2(vec1.x - vec2.x, vec1.y - vec2.y);
    }
    static multiply(vec, n) {
        return new vector2(vec.x * n, vec.y * n);
    }
    static divide(vec, n) {
        return new vector2(vec.x / n, vec.y / n);
    }
    static dot(vec1, vec2) {
        return (vec1.x * vec2.x) + (vec1.y * vec2.y);
    }
    negativ() {
        return new vector2(-this.x, -this.y);
    }
    floor() {
        return new vector2(Math.floor(this.x), Math.floor(this.y));
    }
    nullify() {
        this.x = 0;
        this.y = 0;
    }
    static nullVector() {
        return new vector2(0, 0);
    }
    log() {
        console.log("(" + this.x + " ; " + this.y + ")");
    }
}
