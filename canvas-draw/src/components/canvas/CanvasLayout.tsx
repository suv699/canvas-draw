import React, { useRef, useEffect } from 'react';

const CanvasLayout = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const resetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = canvasRef?.current;
    const ctx = el?.getContext('2d');

    const onMoveHandler = (e: MouseEvent) => {
      const { offsetX, offsetY } = e;
      ctx?.lineTo(offsetX, offsetY);
      ctx?.stroke();
    };

    const reset = () => {
      ctx?.clearRect(0, 0, el?.width ?? 0, el?.height ?? 0);
      ctx?.closePath();
      ctx?.beginPath();
    };

    if (ctx) {
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 0);
    }

    const btn = resetRef.current;
    btn?.addEventListener('click', reset);

    el?.addEventListener('mousemove', onMoveHandler);
    return () => el?.removeEventListener('mousemove', onMoveHandler) && btn?.removeEventListener('click', reset);
  }, []);

  return (
    <div>
      <div>
        <button ref={resetRef} className="reset-btn">
          Reset
        </button>
      </div>
      <canvas ref={canvasRef} className="canvas" height="500" width="500"></canvas>
    </div>
  );
};

export default CanvasLayout;
