import localSTORAGE from './../components/temporary_base'
const DATA = {
    openModal: false,
    data_base: [...localSTORAGE],
    sorting_base: [...localSTORAGE],
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
			return [...this.data_base]
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
	}
}


const reducer = (state = DATA, action) => {
    console.log(state);
    switch(action.type){
        case "OPEN_ADD_MODAL" : return state = {...state, openModal: action.payload};
        case "CLOSE_ADD_MODAL" : return state = {...state, openModal: action.payload};
        case "SORTING_DATA_BASE": return state = {...state, sorting_base: [...action.payload]};
        case "FILTER_DATA_BASE" : return state = {...state, sorting_base: action.payload};
        case 'ADD_WORKER' : return state = {...state};
        default: return state = {...state};
    }
};
export default reducer;