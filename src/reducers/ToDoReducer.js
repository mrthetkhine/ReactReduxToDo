const toDoReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case 'REMOVE_TODO':
            return state.filter(item=>item.id!=action.item.id)
        default : return state;
    }
}
export default toDoReducer;
