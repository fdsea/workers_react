import React from 'react';

const Option = ({value, data, select}) => {
	return(
		<option value = { value }>{ data }</option>
	);
};
export default Option;