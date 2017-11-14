import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import store from './../app';
import OpenButton from './openModalButton';
import FilterInput from './filter_input'

const ActionLine = ({isValue}) => {
    return(
    <Grid>
        <Row>
            <Col xs={6}>
            <FilterInput isValue={isValue}/>
            </Col>
            <Col xs={1}>
            <OpenButton open={()=>{
                store.dispatch({
                    type: "OPEN_ADD_MODAL",
                    payload: true
                });
            }}/>
            </Col>
        </Row>
    </Grid>
    );
};

export default ActionLine;