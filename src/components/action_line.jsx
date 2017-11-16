import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import store from './../app';
import OpenButton from './openModalButton';
import FilterInput from './filter_input'

const ActionLine = ({isValue, changeDisp}) => {
    return(
    <Grid style={{paddingTop: '3em'}}>
        <Row>
            <Col xs={6}>
            <FilterInput isValue={isValue}/>
            </Col>
            <Col xs={3}>
            <OpenButton open={()=>{
                store.dispatch({
                    type: "OPEN_ADD_MODAL",
                    payload: true
                });
            }}/> 
            </Col>
            <Col xs={3}>
                <Button style={{display: 'inline-block', marginTop: '1.7em', marginRight: ".2em"}} bsStyle="success" onClick={()=>{changeDisp(1)}}>Список</Button>
                <Button style={{display: 'inline-block', marginTop: '1.7em'}} bsStyle="success" onClick={()=>{changeDisp(0)}}>Страницы</Button>
            </Col>
        </Row>
    </Grid>
    );
};

export default ActionLine;