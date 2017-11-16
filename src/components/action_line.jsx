import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import store from './../app';
import OpenButton from './openModalButton';
import FilterInput from './filter_input';
import TooltipUn from './tooltip'

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
            <TooltipUn classTool={'tl--add'} data = {'Добавление в базу нового сотрудника. ВАЖНО! проверяйте правильность формата данных!'} /> 
            </Col>
            <Col xs={3} style={{position:'relative'}}>
                <Link className="list-btn" to="/">
                    <Button  style={{display: 'inline-block', marginTop: '1.7em', marginRight: ".2em"}} bsStyle="success" onClick={()=>{changeDisp(1)}}>Список</Button>
                </Link>
                <TooltipUn classTool={'tl--list'} data = {'Режим отображения информации в виде списка. Используется для основной работы '} />
                <Link className="page-btn" to='/0'>
                    <Button  style={{display: 'inline-block', marginTop: '1.7em'}} bsStyle="success" onClick={()=>{changeDisp(0)}}>Страницы</Button>     
                </Link>
                <TooltipUn classTool={'tl--page'} data = {'Режим отображения информации, который позволяет выводить данные постранично, после сортировки'} />
            </Col>
        </Row>
    </Grid>
    );
};

export default ActionLine;