import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Tools = 'pencil' | 'eraser';
export interface ToolsState {
  activeTool: Tools;
  selectTool: (tool: Tools) => void;
  setColor: (color: string) => void;
  color: string;
}
export const useTools = create<ToolsState>()(
  devtools(
    (set /*, get, api */) => ({
      activeTool: 'pencil',
      color: '#fff',
      selectTool: (tool) =>
        set({
          activeTool: tool,
        }),
      setColor: (color) =>
        set({
          color,
        }),
    }),
    {
      name: 'Canvas',
    }
  )
);
