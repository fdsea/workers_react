import React from 'react';
import { Button } from 'react-bootstrap';
import store from './../app';

const TableRowComponent = ({data}) => {
	return(
		<tr>
			<td className="td_table td--content" data-department={data.department}>{data.department}</td>
			<td className="td_table td--content" data-name={data.name}>{data.name}  {data.patronymic} {data.surname}</td>
			<td className="td_table td--content" data-birthday={data.birthday}>{data.birthday}</td>
			<td className="td_table td--content" data-position ={data.position}>{data.position}</td>
			<td className="td_table td--content" data-status={data.status}>{data.status}</td>
			<td className="td_table td--content">
				<Button className="btn-mN btn--reduction" bsStyle="warning" onClick={()=>{
					store.dispatch({
						type: 'OPEN_EDIT_MODAL',
						payload: {data: {...data}, open: true}
					});
				}}>Ред</Button>
				{/*<Button bsStyle="primary" className="btn-mN btn--depCh">См</Button> */}
				{data.status === 'работает' 
				? 
				<Button bsStyle="danger" className="btn-mN btn--job" onClick={()=>{
					store.dispatch({
						type: "FIRED_WORKER",
						payload: {...data, status: 'уволен(а)'}
					});
				}}>Ув</Button> 
				: 
				<Button  bsStyle="success" className="btn-mN btn--job" onClick={()=>{
					store.dispatch({
						type: "TAKE_BACK_WORKER",
						payload: {...data, status: 'работает'}
					});
				}}>Вос</Button>}
			</td>
		</tr>
	);
};
export default TableRowComponent;