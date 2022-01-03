import { Reducer } from "redux";
import {
  deleteTodoAction,
  markDoingAction,
  markDoneAction,
  markTodoAction,
} from "../types/actionsType";
import { todo } from "../types/storeTypes";

const initialState: todo = ["hello there", "general kenobi"];

const todoReducer: Reducer<
  todo,
  deleteTodoAction | markTodoAction | markDoingAction | markDoneAction
> = (state = initialState, action) => {
  switch (action.type) {
    case "Mark_Todo":
      return [...state, action.todo];
    case "Mark_Doing":
    case "Mark_Done":
    case "Delete_Todo":
      return [...state.filter((todo) => todo !== action.todo)];
    default:
      return [...state];
  }
};
export default todoReducer;
