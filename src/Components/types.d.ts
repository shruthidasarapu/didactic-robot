interface Todo {
    text: string;
  }
type removeTodo = (textToDelete: string) => void;
type AddTodo = (text: string) => void;