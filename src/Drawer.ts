export class Drawer{
    constructor(public canvas: HTMLCanvasElement){}

    public clear():void{
      let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.clearRect(0 , 0, this.canvas.width, this.canvas.height);
    }

    public DrawCircle(x:number, y:number, radius:number, fill:string , stroke:string , strokeWidth:number ){
        let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        if (fill) {
          ctx.fillStyle = fill;
          ctx.fill();
        }
        if (stroke) {
          ctx.lineWidth = strokeWidth;
          ctx.strokeStyle = stroke;
          ctx.stroke();
        }
    }
}