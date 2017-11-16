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
        //console.log(this.props.match.params.number); /// получается ссылка на индекс массива который и надо отрисовать
        //console.log(this.state.arr);                /// ссылка на временный массив
       console.log(index, this.state.arr[index])
        return(
            <div></div>
        );
    }
}

export default TablePage;