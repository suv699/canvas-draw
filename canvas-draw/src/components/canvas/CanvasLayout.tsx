import React, { useRef, useEffect } from 'react';

const CanvasLayout = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const el = canvasRef?.current;
  const ctx = el?.getContext('2d');

  const reset = () => {
    ctx?.clearRect(0, 0, el?.width ?? 0, el?.height ?? 0);
  };

  useEffect(() => {
    const onMoveHandler = (e: MouseEvent) => {
      const { offsetX, offsetY } = e;
      ctx?.lineTo(offsetX, offsetY);
      ctx?.stroke();
    };

    if (ctx) {
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 0);
    }

    el?.addEventListener('mousemove', onMoveHandler);
    return () => el?.removeEventListener('mousemove', onMoveHandler);
  }, []);

  return (
    <div>
      <div>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
      <canvas ref={canvasRef} className="canvas" height="500" width="500"></canvas>
    </div>
  );
};

export default CanvasLayout;
