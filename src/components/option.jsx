import React from 'react';

const Option = ({value, data, select}) => {
	return(
		<option value = { data }>{ data }</option>
	);
};
export default Option;