import React from 'react';
import './ToolsPnl.css';
import { Tools, useTools } from '../../store/tools-store';
import classNames from 'classnames';
import { FaEraser, FaPencilAlt } from 'react-icons/fa';

interface ToolsItem {
  name: Tools;
  icon: React.ReactNode;
}

const TOOLS: ToolsItem[] = [
  { name: 'pencil', icon: <FaPencilAlt /> },
  { name: 'eraser', icon: <FaEraser /> },
];
interface Props {}

const ToolsPnl: React.FC<Props> = () => {
  const { activeTool: tool, selectTool, color, setColor } = useTools();

  return (
    <div className="tools-container">
      {TOOLS.map((t) => (
        <div
          key={t.name}
          className={classNames('tools-item ', `${t.name === tool ? 'active' : ''}`)}
          onClick={() => selectTool(t.name)}
        >
          <div className="tool-icon">{t.icon}</div>
          {/* <div className="tool-name">{t.name}</div> */}
        </div>
      ))}
      <div className="tools-item">
        <input type="color" name="color" id="color-id" onChange={(e) => setColor(e.target.value)} value={color} />
      </div>
    </div>
  );
};

export default ToolsPnl;
