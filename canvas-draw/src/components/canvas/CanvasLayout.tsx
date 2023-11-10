import { useRef } from 'react';
import { useCanvas } from './useCanvas';

const CanvasLayout = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { clearCanvas } = useCanvas(canvasRef);

  return (
    <div>
      <div>
        <button onClick={clearCanvas} className="reset-btn">
          Reset
        </button>
      </div>
      <canvas ref={canvasRef} className="canvas" height="500" width="500"></canvas>
    </div>
  );
};

export default CanvasLayout;
