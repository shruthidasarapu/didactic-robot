import {
  deleteTodoActionCreator,
  markDoingActionCreator,
  markDoneActionCreator,
  markTodoActionCreator,
} from "../types/actinCreatorType";

export const markTodo: markTodoActionCreator = (todo: string) => {
  return {
    type: "Mark_Todo",
    todo,
  };
};

export const markDoing: markDoingActionCreator = (todo: string) => {
  return {
    type: "Mark_Doing",
    todo,
  };
};

export const markDone: markDoneActionCreator = (todo: string) => {
  return {
    type: "Mark_Done",
    todo,
  };
};
export const deleteTodo: deleteTodoActionCreator = (todo: string) => {
  return {
    type: "Delete_Todo",
    todo,
  };
};
