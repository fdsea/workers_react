import React from 'react';
import { Table, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import TableRowComponent from './table_row'; 
import store from './../app';    
class ContentPage extends React.Component{
    constructor(props){
        super(props);
        this.sorting = this.sorting.bind(this);
    }
    sorting(e){
        store.dispatch({
            type: "SORTING_DATA_BASE",
            payload: this.props.isValue.sorting(e)
        });
    }
    render(){
        let rows = this.props.isValue.sorting_base.map((value, index)=>{
			return <TableRowComponent key={`${index}`} data = {value}/>
		});
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
            </Grid>            
        );
    }
}
export default ContentPage;