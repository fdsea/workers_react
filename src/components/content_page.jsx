import React from 'react';
import {Button, Table, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import TableRowComponent from './table_row';
import TablePage from './table_page';
import store from './../app';    
class ContentPage extends React.Component{
    constructor(props){
        super(props);
        this.sorting = this.sorting.bind(this);
        this.state ={
        rows : []
        };
    }
    sorting(e){
        store.dispatch({
            type: "SORTING_DATA_BASE",
            payload: this.props.isValue.sorting(e)
        });
    }
    render(){
        let rows;
        let pages;
        let links = this.props.isValue.temporary_arr.map((v, i)=>{
            return <Link to={`/${i}`} key={`${i}`} style={{marginRight: '.5em'}}><Button bsStyle="success">{ i+1 }</Button></Link>
        });
        let routs = <Switch>
                        <Route path='/:number' component = {TablePage}/>
                    </Switch>
            this.props.isValue.quant_data 
            ? 
                rows = this.props.isValue.sorting_base.map((value, index)=>{
			        return (
                    value.department==="Офис" ? <TableRowComponent key={`${index}`} data = {value} /> :
                    value.department==="Склад" ? <TableRowComponent key={`${index}`} data = {value} /> : 
                        <TableRowComponent key={`${index}`} data = {value} />
                    )
                })

            : 
             pages = routs;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Table className="output_table">
                            <thead style={{background: 'lightgrey'}}>
                                <tr>
                                    <td className="td_table head--cell" onClick={this.sorting} data-sort ='department'>Отдел</td>
                                    <td className="td_table head--cell" onClick={this.sorting} data-sort ='name'>ФИО</td>
                                    <td className="td_table head--cell" onClick={this.sorting} data-sort ='birthday'>Дата Рождения</td>
                                    <td className="td_table head--cell" onClick={this.sorting} data-sort ='position'>Должность</td>
                                    <td className="td_table head--cell" onClick={this.sorting} data-sort ='status'>Статус</td>
                                    <td className="td_table head--cell">Кнопки</td>
                                </tr>
                            </thead>
                                { pages }
                            <tbody>    
                                { rows }
                            </tbody>    
                        </Table>
                       <div>{links}</div>
                    </Col>
                </Row>
            </Grid>            
        );
    }
}
export default ContentPage;