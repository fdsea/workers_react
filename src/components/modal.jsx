
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddWorker from './addWorker';
import store from './../app';

class AddModal extends React.Component{
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal(){
    store.dispatch({
      type: "CLOSE_ADD_MODAL",
      payload: false
    });
  } 
  render() {
    return (
      <div>
        <Modal show={this.props.isValue.openModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Добавить сотрудника</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <AddWorker />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal} bsStyle="primary">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;

