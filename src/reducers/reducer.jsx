//import localSTORAGE from './../components/temporary_base'
const DATA = {
    openModal: false,
    storeKey: 'test_data_base_q1w2e3r4',
    data_base: [],
    sorting_base: [],
    temporary_edit_value: {data: {}, open: false},
    sortThis: function(arr, parameter) {
        let middleArr = [...arr];
        middleArr.sort((a, b)=>{
            if(a[parameter] > b[parameter]){
                return 1;
            }else if(a[parameter] < b[parameter]){
                return -1;
            }else{
                return 0;
            }
        });
        return middleArr;
    },
    sorting: function(e){
        let att = e.target.getAttribute('data-sort');
        return [...this.sortThis([...this.sorting_base], att)];
    },
    changeValue(e){
		if(e.target.value){
			return this.filterValue(e.target.value, [...this.sorting_base]);
		}else{
			return [...JSON.parse(localStorage.getItem(this.storeKey))]
		}
	},
	filterValue(inp, data){
		let a = [];
				let b = data.filter((value)=>{
					let reg = new RegExp(inp, 'gi');
					return (
						value.name.match(reg) || 
						value.surname.match(reg) || 
						value.patronymic.match(reg) || 
						value.birthday.match(reg) || 
						value.position.match(reg) || 
                        value.phone.match(reg)
                    );
				});
				a.push([...b]);
		return a.reduce((prev, next)=>{return prev.concat(next)});
    },
    localStorageActions: function (type, value, storage_data_base){
        let data = JSON.parse(localStorage.getItem(storage_data_base)),
                middleValue = '',
                sendData = '';
        let filterElements = data.filter((element, index)=>{
                return value.id !== element.id;
            });
        if(type === "edit"){
            middleValue = [...filterElements, value];
        }else if(type === 'delete'){
            middleValue = [...filterElements];
        }else if(type === 'back'){
            
        }else if(type === 'add'){
            middleValue = [...data, value];			 
        }else if(type === 'fired'){

        }
        sendData = JSON.stringify(middleValue);
        localStorage.setItem(storage_data_base, sendData);
    }
}


const reducer = (state = DATA, action) => {
   // console.log(state.temporary_edit_value);
    switch(action.type){
        case "LOAD_DATA" : return state = {...state, data_base: action.payload, sorting_base: action.payload};
        case "OPEN_ADD_MODAL" : return state = {...state, openModal: action.payload};
        case "OPEN_EDIT_MODAL" : return state = {...state, temporary_edit_value: action.payload};
        case "CLOSE_EDIT_MODAL" : return state = {...state, temporary_edit_value: action.payload};
        case "CLOSE_ADD_MODAL" : return state = {...state, openModal: action.payload};
        case "SORTING_DATA_BASE": return state = {...state, sorting_base: [...action.payload]};
        case "FILTER_DATA_BASE" : return state = {...state, sorting_base: action.payload};
        case 'ADD_WORKER' :   state.localStorageActions('add', action.payload, state.storeKey); return state = {...state, sorting_base: [...state.sorting_base, action.payload]};
        case 'DELETE_WORKER': state.localStorageActions('delete', action.payload, state.storeKey); return state = {...state, sorting_base: [...state.sorting_base.filter((v)=>{
            if(v.id != action.payload.id){
                return v;
            }
        })]};
        case "FIRED_WORKER" : state.localStorageActions('edit', action.payload, state.storeKey); return state = {...state, sorting_base: [...state.sorting_base.map((v)=>{
            if(v.id == action.payload.id){
                return {...v, status: 'уволен(а)'}
            }else{
                return v;
            }
        })]};
        case "TAKE_BACK_WORKER" : state.localStorageActions('edit', action.payload, state.storeKey);return state = {...state, sorting_base: [...state.sorting_base.map((v)=>{
            if(v.id == action.payload.id){
                return {...v, status: 'работает'}
            }else{
                return v;
            }
        })]};
        case 'EDIT_WORKER' :  state.localStorageActions('edit', action.payload, state.storeKey);return state = {...state, sorting_base: [...state.sorting_base.map((v)=>{
            if(v.id == action.payload.id){
                return {...action.payload}
            }else{
                return v;
            }
        })]};
        default: return state = {...state,};
    }
};
export default reducer;