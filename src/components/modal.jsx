
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddWorker from './addWorker';
import EditWorker from './editWorker';
import store from './../app';

class AddModal extends React.Component{
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal(){
    if( this.props.type === 'add'){
      store.dispatch({
        type: "CLOSE_ADD_MODAL",
        payload: false
      });
    }else{
      store.dispatch({
        type: "CLOSE_EDIT_MODAL",
        payload: {data: {}, open: false}
      });
    }  
  } 
  render() {
    return (
      <div>
        <Modal show={
          this.props.type === 'add' ? this.props.isValue.openModal : this.props.isValue.temporary_edit_value.open
        } onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
            {this.props.type === 'add' ? 'Добавить сотрудника' : 'Редактирование данных'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {this.props.type === 'add' ? <AddWorker /> : <EditWorker isValue={this.props.isValue}/>}
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

