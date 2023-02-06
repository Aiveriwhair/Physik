import { object2D } from '../object2D.js';
import { CollisionPoints } from './CollisionPoints.js';

export type Collision2D = {
    objA:object2D,
    objB:object2D,
    Points:CollisionPoints
}