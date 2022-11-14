import React, {useState} from 'react';
import Modal from "../components/UI/Modal/Modal";
import Alert from "../components/UI/Alert/Alert";


const Demo: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [warnings, setWarnings] = useState(false);

  const onClose = () => {
    setModalShow(false);
  };

  const modalShowHandler = () => {
    setModalShow(true);
  };

  const onDismiss = () => {
    setWarnings(false);
  };

  const alertShowHandler = () => {
    setAlertShow(true);
    setWarnings(true);
  };

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
        <Alert type={"Warning"} show={warnings} onDismiss={onDismiss}>
          <p>This is a warning type alert</p>
        </Alert>
        <Alert type={"Danger"} show={alertShow}>
          <p>This is a danger type alert</p>
        </Alert>
        <Alert type={"Success"} show={alertShow}>
          <p>This is a success type alert</p>
        </Alert>
        <Alert type={"Primary"} show={alertShow}>
          <p>This is a primary type alert</p>
        </Alert>
      </div>
    </div>
  );
};

export default Demo;