export interface markTodoAction {
  type: "Mark_Todo";
  todo: string;
}
export interface markDoingAction {
  type: "Mark_Doing";
  todo: string;
}
export interface markDoneAction {
  type: "Mark_Done";
  todo: string;
}
export interface deleteTodoAction {
  type: "Delete_Todo";
  todo: string;
}
