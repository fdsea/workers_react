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
const history = createBrowserHistory();

class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<ActionLine isValue = {this.props.appData}/>
				<AddModal isValue = {this.props.appData}/>
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
const Point = connect(mapStateToProps)(App);
const store = createStore(reducers);
export default store;

render(<Provider store = { store }><Point /></Provider>, document.getElementById('app-root'));
