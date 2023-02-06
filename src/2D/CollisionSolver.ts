import { vector2 } from '../maths/vector2.js';
import { Collision2D } from './collisions2D/Collision2D.js';
export class CollisionSolver{
    constructor(){

    }

    // public resolveCollision1D(objA:object2D, objB:object2D):void{
    //     let massSum = objA.Mass + objB.Mass;
    //     let massAB = objA.Mass - objB.Mass;
    //     let massBA = objB.Mass - objA.Mass;
    //     /*
    //                 v1'=(v1(m1−m2) + 2m2v2)/m1+m2    
    //                 v2'=(v2(m2−m1) + 2m1v1)/m1+m2
    //     */
    //    //https://www.vobarian.com/collisions/2dcollisions2.pdf
    //     objA.Velocity = vector2.divide(
    //         vector2.add(vector2.multiply(objA.Velocity, massAB), vector2.multiply(objB.Velocity, 2*objB.Mass)),
    //         massSum);
    //     objB.Velocity = vector2.divide(
    //         vector2.add(vector2.multiply(objB.Velocity, massBA),vector2.multiply(objA.Velocity, 2*objA.Mass)),
    //         massSum);

    // }

    public resolveCollision2D(collision:Collision2D){
        //https://www.vobarian.com/collisions/2dcollisions2.pdf
        let un = collision.Points.normal.normalize();
        let ut = new vector2(-un.y, un.x);

        let v1n_scalar = vector2.dot(un, collision.objA.Velocity);
        let v1t_scalar = vector2.dot(ut, collision.objA.Velocity);
        let v2n_scalar = vector2.dot(un, collision.objB.Velocity);
        let v2t_scalar = vector2.dot(ut, collision.objB.Velocity);
        let massA = collision.objA.Mass;
        let massB = collision.objB.Mass;
        let v1nf_scalar = (v1n_scalar*(massA - massB) + 2*massB*v2n_scalar)/(massB+massA);
        let v2nf_scalar = (v2n_scalar*(massB - massA) + 2*massA*v1n_scalar)/(massB+massA);

        let v1nf = vector2.multiply(un, v1nf_scalar);
        let v2nf = vector2.multiply(un, v2nf_scalar);
        let v1tf = vector2.multiply(ut, v1t_scalar);
        let v2tf = vector2.multiply(ut, v2t_scalar);

        collision.objA.Velocity = vector2.multiply(vector2.add(v1nf, v1tf), collision.objA.EnergyLossOnCollision);
        collision.objB.Velocity = vector2.multiply(vector2.add(v2nf, v2tf), collision.objA.EnergyLossOnCollision);
        collision.objA.Transform.Position = vector2.add(collision.objA.Transform.Position, vector2.multiply(un, collision.Points.depth/2));
        collision.objB.Transform.Position = vector2.add(collision.objB.Transform.Position, vector2.multiply(un.negativ(), collision.Points.depth/2));
    }


}