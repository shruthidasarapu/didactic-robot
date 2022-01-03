import {Reducer} from "redux";
import { deleteTodoAction, markDoingAction, markDoneAction, markTodoAction } from "../types/actionsType";
import { done } from "../types/storeTypes";

const initialState: done = [];

const doneReducer: Reducer<done,
deleteTodoAction| markTodoAction | markDoingAction| markDoneAction>= (state= initialState, action) => {
switch(action.type){
    case "Mark_Done":
     return [...state, action.todo];
     case "Mark_Todo":
     case "Mark_Doing":
     case "Delete_Todo":
        return [...state.filter((todo) => todo !== action.todo)]   
    default:
     return [...state];

}
};
export default doneReducer;