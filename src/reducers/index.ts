import { combineReducers } from "redux";
import { todosReducer } from "./todo";
import { Todo } from "../actions";

export interface StoreState {
    counter: number
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    counter: () => 1,
    todos: todosReducer
})