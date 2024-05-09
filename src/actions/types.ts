import { FetchToDoAction, DeleteToDoAction } from "./todos";

export enum ActionTypes {
    fetchToDo,
    deleteToDo
}

export type Action = FetchToDoAction | DeleteToDoAction