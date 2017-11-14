import React from 'react';

const TableRow = ({data}) => {
	return(
		<tr>
			<td className="td_table" data-department={data.department}>{data.department}</td>
			<td className="td_table" data-name={data.name}>{data.name}  {data.patronymic} {data.surname}</td>
			<td className="td_table" data-birthday={data.birthday}>{data.birthday}</td>
			<td className="td_table" data-position ={data.position}>{data.position}</td>
			<td className="td_table" data-status={data.status}>{data.status}</td>
			<td className="td_table">
				<button className="btn btn--red">Ред</button>
				<button className="btn btn--orange">См</button>
				{data.status === 'work' ? <button className="btn btn--blue">Ув</button> : <button className="btn btn--green">Вос</button>}
			</td>
		</tr>
	);
};
export default TableRow;