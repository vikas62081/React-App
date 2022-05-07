import React, { useState } from "react";
import "./App.css";
import { Chip, List } from "@mui/material";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import { DELETE_TODO } from "./store/actionType";

function App() {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUpdateData(null);
  };
  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };
  const handleUpdate = (todo) => {
    setUpdateData(todo);
    handleOpen();
  };
  return (
    <div className="App">
      <h2>Todo React Redux App</h2>
      <Chip
        onClick={handleOpen}
        label="ADD TODO"
        variant="outlined"
        style={{ marginLeft: 10, width: 150 }}
        color="primary"
      />
      <TodoForm open={open} handleClose={handleClose} todo={updateData} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </List>
    </div>
  );
}

export default App;
