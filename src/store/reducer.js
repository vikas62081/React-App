import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType";

const initialState = {
  todos: [
    { id: 1, title: "Let's Play", due_date: "2022-05-07", status: "Pending" },
    {
      id: 2,
      title: "Go to market",
      due_date: "2022-05-14",
      status: "Completed",
    },
  ],
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case ADD_TODO:
      return { todos: [...state.todos, payload] };
    case DELETE_TODO:
      return { todos: state.todos.filter((todo) => todo.id !== payload) };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return payload;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
