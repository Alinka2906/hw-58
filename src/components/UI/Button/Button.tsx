import React from 'react';
import type {Button} from "../../../types";

interface Props {
  onClick: React.MouseEventHandler;
  type: string;
  label: string
}

const Button: React.FC<Props> = ({onClick, type, label}) => {
  return (
    <div>
        <button onClick={onClick} className={type}>
          {label}
        </button>
    </div>
  );
};

export default Button;