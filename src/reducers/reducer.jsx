
const DATA = {
    openModal: false,
    data_base: {}
}


const reducer = (state = DATA, action) => {
    //console.log(state);
    switch(action.type){
        case "OPEN_ADD_MODAL" : return state = {...state, openModal: action.payload};
        case "CLOSE_ADD_MODAL" : return state = {...state, openModal: action.payload};
        case 'ADD_WORKER' : return state = {...state};
        default: return state = {...state};
    }
};
export default reducer;