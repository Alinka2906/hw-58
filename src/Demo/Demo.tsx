import React, {useState} from 'react';
import Modal from "../components/UI/Modal/Modal";
import Alert from "../components/UI/Alert/Alert";

interface SomeHandlerParams {
  type: any;
}

const Demo: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false)

  const onClose = () => {
    setModalShow(false);
  };

  const modalShowHandler = () => {
    setModalShow(true);
  };

  const alertShowHandler = () => {
    setAlertShow(true);
  };

  const continued = () => {
    window.alert('You clicked continue')
  };

  // const [showDangerAlert, setShowDangerAlert] = useState(true);
  // const [showWarningAlert, setShowWarningAlert] = useState(true);
  // const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  // const [showPrimaryAlert, setShowPrimaryAlert] = useState(true);
  //
  // const DANGER = 'danger';
  // const WARNING = 'warning';
  // const SUCCESS = 'success';
  // const PRIMARY = 'primary';

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
      <Alert type={} onDismiss={} show={} onClose={}
    </div>
  );
};

export default Demo;