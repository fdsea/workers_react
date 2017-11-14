/*import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';

class DeleteProductsModal extends React.Component{
  constructor(props){
    super(props);
    this.deleteValue = this.deleteValue.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }
  fetchAPI(url, method, sendBody){
      fetch(url, {
          method: method,
          headers: {
            'Content-type': 'application/json'
          }, 
          body: JSON.stringify( sendBody )
        })
      .then((res) => res.json() )
      .then((data) => {
        console.log('DELETE');
      })
      .catch((err) => console.log('database send err') )
    }
  deleteValue(){
    this.fetchAPI(`/api/products/${store.getState().productsReducer.deleteModal.delId}`, 'delete');
    store.dispatch({type: "DELETE_PRODUCTS", payload: 1})
  }
  render(){
    return(
        <Modal show={this.props.productsReducer.deleteModal.deleteState} onHide={()=>{
          store.dispatch({type: "CLOSE_DELETE_PRODUCTS", payload: {deleteState: false}});
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Delete product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>You shure?</h3>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_DELETE_PRODUCTS", payload: {deleteState: false}})}} bsStyle="success" style={{padding: '0.5em 2em', marginRight: '1em'}} >No</Button>
            <Button onClick={this.deleteValue} bsStyle="danger">Yes</Button>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_DELETE_PRODUCTS", payload: {deleteState: false}})}}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}

export default DeleteProductsModal;
*/