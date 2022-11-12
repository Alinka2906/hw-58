import React from 'react';

interface Props {
  type: string,
  onDismiss: React.MouseEventHandler,
  show: boolean;
  onClose: React.MouseEventHandler
}

const Alert:React.FC<Props> = ({type, onDismiss, show}) => {
  return (
    <div>
      <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onDismiss}/>
    </div>
  );
};

export default Alert;