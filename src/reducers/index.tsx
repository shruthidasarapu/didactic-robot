import { combineReducers } from "redux";
import todo from "./todoReducer";
import doing from "./doingReducer";
import done from "./doneReducer";

export default combineReducers({
  todo,
  doing,
  done,
});
