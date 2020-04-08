import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { selectMessageBox } from "Store/selectors";
import { closeGlobalMessageBox } from "Helper";

const MessageBox = props => {
  const globalMessageBox = useSelector(selectMessageBox);
  console.log(globalMessageBox);

  let headerClass = "";

  if (globalMessageBox) {
    switch (globalMessageBox.type) {
      case "error":
        headerClass = "modal-colored-header bg-danger";
        break;
      case "warning":
        headerClass = "modal-colored-header bg-warning";
        break;
      case "info":
        headerClass = "modal-colored-header bg-info";
        break;
      case "success":
        headerClass = "modal-colored-header bg-success";
        break;
      default:
        break;
    }
  }

  return (
    <Modal
      show={Boolean(globalMessageBox.open)}
      onHide={closeGlobalMessageBox}
      centered
      style={{ zIndex: 99999 }}
      className="zoom">
      <Modal.Header className={headerClass} closeButton>
        <Modal.Title className="mt-0 mb-0">
          {Boolean(globalMessageBox) && globalMessageBox.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Boolean(globalMessageBox) &&
          (!globalMessageBox.isHTML ? (
            globalMessageBox.message
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: globalMessageBox.message }}
            />
          ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={closeGlobalMessageBox}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageBox;
