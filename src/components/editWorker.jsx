import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Option from './option';
import store from './../app';

class AddWorker extends React.Component{
	constructor(props){
        super(props);
        this.getValue = this.getValue.bind(this);
        this.setDepartment= this.setDepartment.bind(this);
        //this.setPosition = this.setPosition.bind(this);
		this.state={
            data: {...this.props.isValue.temporary_edit_value.data},
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
    }
    componentWillMount() {
        
        this.setDepartment(1, this.props.isValue.temporary_edit_value.data.department);
    }
	setDepartment(event, secondValue = null){
        let value;
        if(secondValue){
            value = secondValue;
        }else{
            value = event.target.value;
        }
        
		//let value = event.target.value;
		value === 'Офис' ? this.setState({position: [{value: 'boss', data: 'Начальник'}, {value:'manager', data: 'Менеджер'}]}) 
		 : value==='Склад' ? this.setState({position: [{value:'boss_of_store', data: 'Кладовщик'}, {value:"nearly_boss_of_store", data:'Приемщик'}]}) 
         : this.setState({position: [{value:'guardian', data: 'Охранник'}]})
	}
	getValue(event, type="edit"){
        if(type=="edit"){
           event.preventDefault()
        }
        let data = {
            id: this.state.data.id,
            name : `${this.name.value}`,
            surname: `${this.surname.value}`,
            patronymic: `${this.patronymic.value}`,
            birthday: `${this.birthday.value}`,
            department: `${this.department.value}`,
            position: `${this.position.value}`,
            phone: `${this.phone.value}`,
            status: `${this.status.value}`
        };
        if(type == 'edit'){
           store.dispatch({
                type: 'EDIT_WORKER',
                payload: {...data}
        });
       
        }else if(type == "delete"){
            store.dispatch({
                type: "DELETE_WORKER",
                payload: {...data}
            });
        }
	}
	render(){
		let selectDepartment = this.state.department.map((value, index)=>{
			return <Option key = {`${index}`} value = {value.value} data = {value.data} />
		});
		let selectPosition = this.state.position.map((value, index)=>{
			return <Option key={`${index}`} value = {value.value} data = {value.data}/>
        });
		return(
                <div>
                    <Form onSubmit = {(e)=>{this.getValue(e, 'edit')}} id="addWorker">
                        <FormGroup>
                            <ControlLabel>Имя</ControlLabel>
                            <FormControl 
                                inputRef = {input=>this.name = input} 
                                type="text" 
                                pattern="[а-яА-ЯёЁ]{2,15}" 
                                title="Можно использовать только кириллицу от 2 до 15 символов" 
                                placeholder="Имя"
                                defaultValue = {this.state.data.name} 
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
                                defaultValue = {this.state.data.surname}  
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
                                defaultValue = {this.state.data.patronymic} 
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
                                defaultValue = {this.state.data.birthday} 
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Подразделение</ControlLabel>
                            <FormControl 
                                inputRef = {input=>this.department = input}
                                onChange={this.setDepartment}
                                componentClass="select"
                                defaultValue={this.state.data.department} 
                                required
                            >
                            { selectDepartment }
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                        <ControlLabel></ControlLabel>
                        <FormControl 
                            inputRef = {input=>this.position = input}
                            componentClass="select"
                            defaultValue={this.state.data.position} 
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
                            defaultValue={this.state.data.phone} 
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Дата рождения</ControlLabel>
                        <FormControl 
                            inputRef = {input=>this.status = input}
                            componentClass="select"
                            defaultValue="работает"
                            defaultValue={this.state.data.status} 
                            required
                        >
                            <option value="работает">Работает</option>
                            <option value="уволен(а)">Уволен</option>
                        </FormControl>
                    </FormGroup>
                        <Button type="submit" bsStyle="success">Отправить данные</Button>
                    </Form>
                    <Button bsStyle="danger" style={{marginTop:"2em", marginBottom: '0'}} onClick = {()=>{this.getValue(1, 'delete')}}>Удалить данные</Button>
                </div>    
		);
	}
}

export default AddWorker;