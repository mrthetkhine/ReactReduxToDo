import { combineReducers } from 'redux';
import toDoReducer from './ToDoReducer';
export default combineReducers({
    todos: toDoReducer
});
