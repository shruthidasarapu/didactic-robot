import {
  markTodoAction,
  markDoingAction,
  markDoneAction,
  deleteTodoAction,
} from "./actionsType";

export type markTodoActionCreator = (todo: string) => markTodoAction;

export type markDoingActionCreator = (todo: string) => markDoingAction;

export type markDoneActionCreator = (todo: string) => markDoneAction;

export type deleteTodoActionCreator = (todo: string) => deleteTodoAction;
