import { useEffect, useState } from 'react';
import { CanvasService } from './CanvasService';

export const useCanvas = (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>) => {
  const [instance, setInstance] = useState<CanvasService>();

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const instance = new CanvasService(canvasRef.current);
    setInstance(instance);

    return instance.clearWatchEvents();
  }, [canvasRef]);

  return {
    clearCanvas: instance?.clearCanvas.bind(instance),
  };
};
