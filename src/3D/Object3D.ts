import { CircleCollider } from "../2D/collisions2D/CircleCollider.js";
import { vector3 } from "../maths/vector3.js";
import { Transform3D } from "./Transform3D.js";


export class Object3D{
    public Mass :       number;
    public Velocity :   vector3;
    public Force :      vector3;
    public Transform :  Transform3D;

    public EnergyLossOnCollision:number = 0.8;
    public Collider :   CircleCollider | null;
    public RenderColor = 'black';

    constructor(){
        this.Mass = 0;
        this.Velocity = vector3.nullVector();
        this.Force = vector3.nullVector();
        this.Transform = {
            Position : vector3.nullVector(),
            Scale : vector3.nullVector(),
            Rotation : vector3.nullVector()
        };
        this.Collider = null;
    }
}