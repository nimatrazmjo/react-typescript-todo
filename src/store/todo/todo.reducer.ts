import { Todo } from '../../models/todo'
import TodoType from './todo.types';

const INITIAL_STATE:Todo[] = []
type Action = { type: 'ADD_TODO',payload: Todo };
const todoReducer = (state:Todo[] = INITIAL_STATE, action:Action) => {
    switch(action.type) {
        case TodoType.ADD_TODO: {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}

export default todoReducer;