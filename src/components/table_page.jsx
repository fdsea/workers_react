import React from 'react';
import { Button,  Table, Grid, Row, Col} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import TableRowComponent from './table_row';
import store from './../app';


class TablePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let index = this.props.match.params.number;
        //console.log(this.props.match.params.number); /// получается ссылка на индекс массива который и надо отрисовать
        return(
            <td>
                {`Hello! my index is: ${index}`}
            </td>
        );
    }
}

export default TablePage;