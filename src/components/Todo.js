import React from "react";
import { Chip, ListItem, ListItemText } from "@mui/material";

const Todo = ({ todo, handleDelete, handleUpdate }) => {
  //   const { todo } = props;
  const chipStyle = {
    width: 100,
    cursor: "pointer",
  };

  return (
    <ListItem style={{ background: "#1976d214", marginBottom: 2 }}>
      <ListItemText
        primary={todo.title}
        secondary={
          <>
            {new Date(todo.due_date).toDateString()}
            <Chip
              component={"span"}
              label={todo.status}
              size="small"
              variant="outlined"
              style={{ marginLeft: 10, width: 80 }}
              color={todo.status === "Pending" ? "error" : "success"}
            />
          </>
        }
      />
      <Chip
        title="Edit Todo"
        label="Update"
        color="primary"
        style={chipStyle}
        onClick={() => handleUpdate(todo)}
      />
      <Chip
        title="Delete Todo"
        label="Delete"
        color="warning"
        style={chipStyle}
        onClick={() => handleDelete(todo.id)}
      />
    </ListItem>
  );
};

export default Todo;
