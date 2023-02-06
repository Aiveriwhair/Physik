export class vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    normalize() {
        this.x /= this.length();
        this.y /= this.length();
        this.z /= this.length();
    }
    //Operations
    static add(vec1, vec2) {
        return new vector3(vec1.x + vec2.x, vec1.y + vec2.y, vec1.z + vec2.z);
    }
    static substract(vec1, vec2) {
        return new vector3(vec1.x - vec2.x, vec1.y - vec2.y, vec1.z - vec2.z);
    }
    static multiply(vec, n) {
        return new vector3(vec.x * n, vec.y * n, vec.z * n);
    }
    static divide(vec, n) {
        return new vector3(vec.x / n, vec.y / n, vec.z / n);
    }
    static dot(vec1, vec2) {
        return (vec1.x * vec2.x) + (vec1.y * vec2.y) + (vec1.z * vec2.z);
    }
    negativ() {
        return new vector3(-this.x, -this.y, -this.z);
    }
    nullify() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    static nullVector() {
        return new vector3(0, 0, 0);
    }
    log() {
        console.log("(" + this.x + " ; " + this.y + " ; " + this.z + ")");
    }
}
