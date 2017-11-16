import React from 'react';
import {Button, Table, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import TableRowComponent from './table_row';
import TableWrapper from './table_wrapper'; 
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
       //console.log(this.props.isValue.temporary_arr);
        let rows;
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
             rows = <TableWrapper isValue = {this.props.isValue} />;/// тут список таблиц из отсортированного по кол-ву страниц массива
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
                            <tbody>    
                                { rows }
                            </tbody>    
                        </Table>
                    </Col>
                </Row>
                {this.props.isValue.sorting_base.length > this.state.amount ? <Button bsStyle="success">next</Button>: <div></div>}
            </Grid>            
        );
    }
}
export default ContentPage;