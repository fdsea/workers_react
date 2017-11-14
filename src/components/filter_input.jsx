import React from 'react';
import {FormGroup, ControlLabel, FormControl, Form, Grid, Row, Col} from 'react-bootstrap';
import store from './../app';

const FilterInput = ({func}) => {
    return ( 
        <Form>
            <FormGroup>
                <ControlLabel>Поиск</ControlLabel>
                <FormControl onChange={func}></FormControl>
            </FormGroup>
        </Form>
    );
}
export default FilterInput;