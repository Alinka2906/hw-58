import React, {useState} from 'react';


interface Props extends React.PropsWithChildren {
  type: string,
  onDismiss?: React.MouseEventHandler,
  show: boolean,
}

const Alert: React.FC<Props> = ({type, onDismiss, show, children}) => {

      return <div className="container text-center d-flex justify-content-center">
        <div className="row justify-content-center">
  <div className={`col-8 alert alert-${type.toLowerCase()}`} style={{display: show ? 'block' : 'none'}}>
        {children}
        {onDismiss && <button onClick={onDismiss} className="btn btn-secondary">X</button>}
    </div>
        </div>
      </div>

};

export default Alert;