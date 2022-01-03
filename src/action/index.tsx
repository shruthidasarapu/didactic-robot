import { deleteTodoActionCreator, markDoingActionCreator, markDoneActionCreator, markTodoActionCreator } from '../types/actinCreatorType';

export const markTodo: markTodoActionCreator = (todo) => {
    return {
      type:"Mark_Todo",
      todo,
    };
};

export const markDoing: markDoingActionCreator = (todo) => {
    return {
      type:"Mark_Doing",
      todo,
    };
};

export const markDone: markDoneActionCreator = (todo) => {
    return {
        type:"Mark_Done",
        todo,
    };
};
export const deleteTodo: deleteTodoActionCreator = (todo) => {
    return {
        type:"Delete_Todo",
        todo,
    };
};