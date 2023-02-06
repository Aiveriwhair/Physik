export class vector2{

    public x:number;
    public y:number;


    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
    public length():number{
     return Math.sqrt(this.x*this.x + this.y*this.y);   
    }

    public normalize():vector2{
        this.x /= this.length();
        this.y /= this.length();
        return this;
    }

    //Operations
    public static add(vec1: vector2, vec2:vector2):vector2 {
        return new vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    }
    public static substract(vec1: vector2, vec2:vector2):vector2 {
        return new vector2(vec1.x - vec2.x, vec1.y - vec2.y);
    }
    public static multiply(vec:vector2, n:number):vector2 {
        return new vector2(vec.x * n, vec.y * n);
    }
    public static divide(vec:vector2, n:number):vector2 {
        return new vector2(vec.x / n, vec.y / n);
    }
    public static dot(vec1:vector2, vec2:vector2):number {
        return (vec1.x * vec2.x) + (vec1.y * vec2.y);
    }
    public negativ():vector2{
        return new vector2(-this.x, -this.y);
    }
    public floor():vector2{
        return new vector2(Math.floor(this.x), Math.floor(this.y));
    }

    public nullify():void {
        this.x = 0;
        this.y = 0;
    }
    
    public static nullVector():vector2 {
        return new vector2(0, 0);
    }
    
    public log():void {
        console.log("(" + this.x +" ; " + this.y + ")")
    }
}