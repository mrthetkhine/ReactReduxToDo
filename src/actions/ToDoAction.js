let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});
export const removeToDo= item=>({
    type: 'REMOVE_TODO',
    item: item
});
