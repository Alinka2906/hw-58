import React, {useState} from 'react';


interface Props extends React.PropsWithChildren {
  type: string,
  onDismiss?: React.MouseEventHandler,
  show: boolean,
}

const Alert: React.FC<Props> = ({type, onDismiss, show, children}) => {
  const Warning = 'Warning';
  const Danger = 'Danger';
  const Success = 'Success';
  const Primary = 'Primary';

  if (type === Warning) {
    return <div className="alert alert-warning" style={{display: show ? 'block' : 'none'}}>{type}
      <button onClick={onDismiss} className="ms-5 btn btn-secondary">X</button>
    </div>
  }

  if (type === Danger) {
    return <div className="alert alert-danger" style={{display: show ? 'block' : 'none'}}>{type}</div>
  }

  if (type === Success) {
    return <div className="alert alert-success" style={{display: show ? 'block' : 'none'}}>{type}</div>
  }

  if (type === Primary) {
    return <div className="alert alert-primary" style={{display: show ? 'block' : 'none'}}>{type}</div>
  }


  return (
    <>
      <div className="alert">
        <div>
          {type}
        </div>
        <div>
          {children}
        </div>
      </div>

    </>
  );
};

export default Alert;