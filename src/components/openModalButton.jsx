import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';

const OpenButton = ({open}) => {
    return (
            <Button onClick={open} style={{marginTop: '1.7em'}} bsStyle="primary" className="add-worker">Добавить  Сотрудника</Button>
    );
};
export default OpenButton;