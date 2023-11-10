export class CanvasService {
  private readonly canvas!: HTMLCanvasElement;
  private readonly ctx!: CanvasRenderingContext2D;
  private mouseDown = false;

  constructor(canvasRef: HTMLCanvasElement) {
    this.canvas = canvasRef;

    const c = this.canvas.getContext('2d');
    if (c) {
      this.ctx = c;
    }

    this.watchEvents();
  }

  onMouseMoveHandler(e: MouseEvent) {
    if (!this.mouseDown) {
      return;
    }

    const { offsetX, offsetY } = e;

    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
  }

  onMouseLeaveHandler() {
    this.ctx.closePath();
  }

  onMouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(e.offsetX, e.offsetY);
  }
  onMouseUpHandler() {
    this.mouseDown = false;
  }

  watchEvents() {
    this.canvas.addEventListener('mousemove', this.onMouseMoveHandler.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseLeaveHandler.bind(this));
    this.canvas.addEventListener('mousedown', this.onMouseDownHandler.bind(this));
    this.canvas.addEventListener('mouseup', this.onMouseUpHandler.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseUpHandler.bind(this));
  }
  clearWatchEvents() {
    this.canvas.removeEventListener('mousemove', this.onMouseMoveHandler);
    this.canvas.removeEventListener('mouseleave', this.onMouseLeaveHandler);
    this.canvas.removeEventListener('mousedown', this.onMouseDownHandler);
    this.canvas.removeEventListener('mouseup', this.onMouseUpHandler);
    this.canvas.removeEventListener('mouseleave', this.onMouseUpHandler);
  }

  clearCanvas() {
    if (!this.ctx) {
      return;
    }
    this.ctx.clearRect(0, 0, this.canvas.width ?? 0, this.canvas.height ?? 0);
    this.ctx.closePath();
  }
}
