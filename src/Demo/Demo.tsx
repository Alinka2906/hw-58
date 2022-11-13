import React, {useState} from 'react';
import Modal from "../components/UI/Modal/Modal";
import Alert from "../components/UI/Alert/Alert";


const Demo: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);



  const onClose = () => {
    setModalShow(false);
  };

  const modalShowHandler = () => {
    setModalShow(true);
  };

  const onDismiss = () => {
    setAlertShow(false);
  };

  const alertShowHandler = () => {
    setAlertShow(true);
  };

  const Warning = 'Warning';
  const Danger = 'Danger';
  const Success = 'Success';
  const Primary = 'Primary';

  return (
    <div>
      <Modal show={modalShow} title={"Some kinda modal title"} onClose={onClose}>
        <p>This is modal content</p>
      </Modal>
      <div className="col">
      <button className="mt-5 btn btn-primary"
              onClick={modalShowHandler}
      >
        Open modal window
      </button>
      </div>
      <div className="col">
      <button className="mt-5 btn btn-primary"
              onClick={alertShowHandler}
      >
        Open alert
      </button>
      </div>
      <div className="alert">
      <Alert type={Warning} show={alertShow} onDismiss={onDismiss}/>
        <Alert type={Danger} show={alertShow}/>
        <Alert type={Success} show={alertShow}/>
        <Alert type={Primary} show={alertShow}/>
      </div>
    </div>
  );
};

export default Demo;