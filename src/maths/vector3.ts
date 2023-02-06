export class vector3{

    public x:number;
    public y:number;
    public z:number;


    constructor(x:number, y:number, z:number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public length():number{
        return Math.sqrt(this.x* this.x + this.y * this.y + this.z * this.z);
    }
    public normalize(){
        this.x /= this.length();
        this.y /= this.length();
        this.z /= this.length();
    }

    //Operations
    public static add(vec1: vector3, vec2:vector3):vector3 {
        return new vector3(vec1.x + vec2.x, vec1.y + vec2.y, vec1.z + vec2.z);
    }
    public static substract(vec1: vector3, vec2:vector3):vector3 {
        return new vector3(vec1.x - vec2.x, vec1.y - vec2.y, vec1.z - vec2.z);
    }
    public static multiply(vec:vector3, n:number):vector3 {
        return new vector3(vec.x * n, vec.y * n, vec.z * n);
    }
    public static divide(vec:vector3, n:number):vector3 {
        return new vector3(vec.x / n, vec.y / n, vec.z / n);
    }
    public static dot(vec1:vector3, vec2:vector3):number {
        return (vec1.x * vec2.x) + (vec1.y * vec2.y) + (vec1.z * vec2.z);
    }

    public negativ():vector3{
        return new vector3(-this.x, -this.y, -this.z);
    }
    
    public nullify():void {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    
    public static nullVector():vector3 {
        return new vector3(0, 0, 0);
    }
    
    public log():void {
        console.log("(" + this.x +" ; " + this.y + " ; " + this.z + ")");
    }
}