import React from 'react';
import {FormGroup, ControlLabel, FormControl, Form, Grid, Row, Col} from 'react-bootstrap';
import store from './../app';

const FilterInput = ({func, isValue}) => {
    return ( 
        <Form>
            <FormGroup>
                <ControlLabel>Поиск</ControlLabel>
                <FormControl onChange={(e)=>{
                    store.dispatch({
                        type: "FILTER_DATA_BASE",
                        payload: isValue.changeValue(e)
                    });
                }} placeholder="Введите ФИО, должность, отдел или дату рождения"></FormControl>
            </FormGroup>
        </Form>
    );
}
export default FilterInput;