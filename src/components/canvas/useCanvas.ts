import { useEffect, useState } from 'react';
import { CanvasService } from './CanvasService';
import { useTools } from '../../store/tools-store';

export const useCanvas = (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>) => {
  const [instance, setInstance] = useState<CanvasService>();
  const color = useTools((state) => state.color);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const instance = new CanvasService(canvasRef.current);
    setInstance(instance);

    return instance.clearWatchEvents();
  }, [canvasRef]);

  useEffect(() => {
    instance?.setStroke(color);
  }, [color, instance]);

  return {
    clearCanvas: instance?.clearCanvas.bind(instance),
  };
};
