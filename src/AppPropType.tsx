import {
  deleteTodoActionCreator,
  markDoingActionCreator,
  markDoneActionCreator,
  markTodoActionCreator,
} from "./types/actinCreatorType";
import { doing, done, todo } from "./types/storeTypes";

interface AppPropType {
  todo: todo;
  doing: doing;
  done: done;
  deleteTodo: deleteTodoActionCreator;
  markTodo: markTodoActionCreator;
  markDoing: markDoingActionCreator;
  markDone: markDoneActionCreator;
}

export default AppPropType;
