import { Reducer } from "redux";
import {
  deleteTodoAction,
  markDoingAction,
  markDoneAction,
  markTodoAction,
} from "../types/actionsType";
import { doing } from "../types/storeTypes";

const initialState: doing = [];

const doingReducer: Reducer<
  doing,
  deleteTodoAction | markTodoAction | markDoingAction | markDoneAction
> = (state = initialState, action) => {
  switch (action.type) {
    case "Mark_Doing":
      return [...state, action.todo];
    case "Mark_Todo":
    case "Mark_Done":
    case "Delete_Todo":
      return [...state.filter((todo) => todo !== action.todo)];
    default:
      return [...state];
  }
};
export default doingReducer;
