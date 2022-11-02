const initialState = {
    todos: [
        {
            id: "1",
            title: "Finishing Task",
            body: "Deploying my own app",
            isDone: false,
        },
    ],
    todo: {
        id: "0",
        title: "",
        body: "",
        isDone: false,
    },
};

const ADD_TODO = 'my-app/todos/ADD_TODO';
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    };
};

const DELETE_TODO = 'my-app/todos/DELETE_TODO';
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    };
};


const STATUS_TODO = 'my-app/todos/STATUS_TODO';
export const statusTodo = (payload) => {
    return {
        type: STATUS_TODO,
        payload
    };
};

const GET_TODO_BY_ID = 'my-app/todos/GET_TODO_BY_ID';
export const getTodoByID = (payload) => {
    return {
        type: GET_TODO_BY_ID,
        payload
    };
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
            };

        case STATUS_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isDone: !todo.isDone,
                        };
                    } else {
                        return todo;
                    }
                }),
            };
        
        case GET_TODO_BY_ID:
            return{
                ...state,
                todo: state.todos.find((todo)=>{
                    return todo.id === action.payload;
                }),
            };
        default:
            return state;
    }
};

export default todos;