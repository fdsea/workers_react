import React from 'react';
import { Button,  Table, Grid, Row, Col} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import TableRowComponent from './table_row';
import store from './../app';


class TablePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: store.getState().firstReducer.temporary_arr
        };
    }
    render(){
        let index = this.props.match.params.number;
        let rows = this.state.arr[index].map((v,i)=>{
            return <TableRowComponent key={`${i}`} data={v}/>
        });
        return(
            <tbody>{ rows }</tbody>
        );
    }
}

export default TablePage;