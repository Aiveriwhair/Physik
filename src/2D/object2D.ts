import { vector2 } from '../maths/vector2.js';
import { Collider2D } from './collisions2D/Collider2D.js';
import { Transform2D } from './Transform2D.js';
import { CircleCollider } from './collisions2D/CircleCollider';
import { PlaneCollider } from './collisions2D/PlaneCollider.js';

export class object2D{
    public Mass :       number;
    public Velocity :   vector2;
    public Force :      vector2;
    public Transform :  Transform2D;

    public EnergyLossOnCollision:number = 0.8;
    public Collider :   CircleCollider | null;
    public RenderColor = 'black';

    constructor(){
        this.Mass = 0;
        this.Velocity = vector2.nullVector();
        this.Force = vector2.nullVector();
        this.Transform = {
            Position : vector2.nullVector(),
            Scale : vector2.nullVector(),
            Rotation : 0
        };
        this.Collider = null;
    }
}