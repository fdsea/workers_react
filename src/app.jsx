import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { dispatch, getState} from 'redux';
import { Provider } from 'react-redux';
import 'react-select/dist/react-select.css';
import AddModal from './components/modal';
import ActionLine from './components/action_line';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import reducer from './reducers/reducer';
import ContentPage from './components/content_page';
import localSTORAGE from './components/temporary_base';
const history = createBrowserHistory();

class LoadModule extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		store.dispatch({
			type: "LOAD_DATA",
			payload: [...JSON.parse(localStorage.getItem('test_data_base_q1w2e3r4'))]
		});
	}
	render(){
		return(
			<App appData = {this.props.appData}/>
		);
	}
}
class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<ActionLine isValue = {this.props.appData}/>
				<AddModal isValue = {this.props.appData} type={'add'}/>
				<AddModal isValue = {this.props.appData} type={'edit'}/>
				<ContentPage isValue = {this.props.appData}/>
			</div>
  		);
	}
};
const reducers = combineReducers({
    firstReducer: reducer
    });
const mapStateToProps = (store) => {
    return{
        appData: store.firstReducer
    };
};
const Point = connect(mapStateToProps)(LoadModule);
const store = createStore(reducers);
export default store;

render(<Provider store = { store }>
		<div>
			<Point />
		</div>	
		</Provider>, document.getElementById('app-root'));
