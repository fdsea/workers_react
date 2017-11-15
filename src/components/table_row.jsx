import React from 'react';
import { Button } from 'react-bootstrap';
import store from './../app';

const TableRowComponent = ({data}) => {
	return(
		<tr>
			<td className="td_table" data-department={data.department}>{data.department}</td>
			<td className="td_table" data-name={data.name}>{data.name}  {data.patronymic} {data.surname}</td>
			<td className="td_table" data-birthday={data.birthday}>{data.birthday}</td>
			<td className="td_table" data-position ={data.position}>{data.position}</td>
			<td className="td_table" data-status={data.status}>{data.status}</td>
			<td className="td_table">
				<Button className="btn btn--red" bsStyle="warning" onClick={()=>{
					store.dispatch({
						type: "DELETE_WORKER",
						payload: data
					})
				}}>Ред</Button>
				<Button className="btn btn--orange" bsStyle="primary">См</Button>
				{data.status === 'work' ? <Button className="btn btn--blue" bsStyle="danger">Ув</Button> : <Button className="btn btn--green" bsStyle="success">Вос</Button>}
			</td>
		</tr>
	);
};
export default TableRowComponent;