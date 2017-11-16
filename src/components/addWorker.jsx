import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Option from './option';
import store from './../app';
import TooltipUn from './tooltip';

class AddWorker extends React.Component{
	constructor(props){
		super(props);
		this.sendData = this.sendData.bind(this);
		this.state={
			data: {},
			department: [
				{value: 'office', data: 'Офис'},
				{value: 'store', data: 'Склад'},
				{value: 'guard', data: 'Охрана'}
			],
			position: [
				{value: 'boss', data: 'Начальник'}, 
				{value:'manager', data: 'Менеджер'}
			]
		};
		this.getValue = this.getValue.bind(this);
		this.setDepartment= this.setDepartment.bind(this);
	}
	setDepartment(event){
		let value = event.target.value;
		value === 'Офис' ? this.setState({position: [{value: 'boss', data: 'Начальник'}, {value:'manager', data: 'Менеджер'}]}) 
		 : value==='Склад' ? this.setState({position: [{value:'boss_of_store', data: 'Кладовщик'}, {value:"nearly_boss_of_store", data:'Приемщик'}]}) 
		 : this.setState({position: [{value:'guardian', data: 'Охранник'}]})
	}
	getValue(event){
        event.preventDefault();
        let data = {
            id: `${Math.random() * Math.random()}`,
            name : `${this.name.value}`,
            surname: `${this.surname.value}`,
            patronymic: `${this.patronymic.value}`,
            birthday: `${this.birthday.value}`,
            department: `${this.department.value}`,
            position: `${this.position.value}`,
            phone: `${this.phone.value}`,
            status: `${this.status.value}`
        };
            store.dispatch({
                type: "ADD_WORKER",
                payload: data
        });
	}
	sendData(){
       
        //console.log(this.state.data);
	}
	render(){
		let selectDepartment = this.state.department.map((value, index)=>{
			return <Option key = {`${index}`} value = {value.value} data = {value.data} />
		});
		let selectPosition = this.state.position.map((value, index)=>{
			return <Option key={`${index}`} value = {value.value} data = {value.data}/>
		});
		return(
    
                    <Form onSubmit = {this.getValue} id="addWorker">
                        <FormGroup>
                            <ControlLabel>Имя</ControlLabel>
                            <FormControl 
                                inputRef = {input=>this.name = input} 
                                type="text" 
                                pattern="[а-яА-ЯёЁ]{2,15}" 
                                title="Можно использовать только кириллицу от 2 до 15 символов" 
                                placeholder="Имя" 
                                required ="true"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Фамилия</ControlLabel>
                            <FormControl 
                                inputRef = {input=>this.surname = input} 
                                type="text" 
                                pattern="[а-яА-ЯёЁ]{2,15}" 
                                title="Можно использовать только кириллицу от 2 до 15 символов" 
                                placeholder="Фамилия" 
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Отчество</ControlLabel>
                            <FormControl 
                                inputRef = {input=>this.patronymic = input}
                                type="text" 
                                pattern="[а-яА-ЯёЁ]+" 
                                title="Можно использовать только кириллицу"
                                placeholder="Отчество" 
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Дата рождения</ControlLabel>
                            <FormControl 
                                inputRef = {input=>this.birthday = input}
                                type="text" 
                                pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{2}" 
                                title="Формат! ХХ.ХХ.ХХ"
                                placeholder="Дата рождения" 
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Подразделение</ControlLabel>
                            <FormControl 
                                inputRef = {input=>this.department = input}
                                onChange={this.setDepartment}
                                componentClass="select"
                                defaultValue="Офис"
                                required
                            >
                            { selectDepartment }
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                        <ControlLabel>Позиция</ControlLabel>
                        <FormControl 
                            inputRef = {input=>this.position = input}
                            componentClass="select"
                            defaultValue="Начальник"
                            required
                        >
                       {selectPosition}
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Номер Телефона</ControlLabel>
                        <FormControl 
                            inputRef = {input=>this.phone = input}
                            type="tel" 
                            pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" 
                            title="формат вида 8(XXX)XXX-XX-XX"
                            placeholder="Номер 8(XXX)XXX-XX-XX" 
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Статус</ControlLabel>
                        <FormControl 
                            inputRef = {input=>this.status = input}
                            componentClass="select"
                            defaultValue="работает"
                            required
                        >
                            <option value="работает">Работает</option>
                            <option value="уволен(а)">Уволен</option>
                        </FormControl>
                    </FormGroup>
                        <Button className="btn--send" type="submit" bsStyle="success" onClick = {this.sendData}>Отправить данные</Button>
                        <TooltipUn classTool={'tl--send'} data = {'Отправка введенных данных в базу данных. После нажатия, окно добавления работника можно закрыть'} />
                    </Form>
		);
	}
}

export default AddWorker;