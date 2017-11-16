import React from 'react';
import { Button,  Table, Grid, Row, Col} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import TablePage from './table_page';
import TableRowComponent from './table_row';
import store from './../app';



class TableWrapper extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        //console.log(this.props.isValue.temporary_arr);
        let links = this.props.isValue.temporary_arr.map((v, i)=>{
            return <Link to={`/${i}`} key={`${i}`}><Button bsStyle="success">{ i }</Button></Link>
        });
        let routs = <td><Route path='/:number' component = {TablePage}/></td>
     
        return(
            <tr>
                {routs}
                {links}
            </tr>
        );
    }
}


export default TableWrapper;