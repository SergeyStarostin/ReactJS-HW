import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deletingTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Grid
      container
      spacing={2}
      style={{ align: "left", maxWidth: 400, margin: "auto", padding: 10 }}
    >
      <Grid item xs={12}>
        <TextField
          label="Новая задача"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: 10 }}>
        <Button variant="contained" color="primary" fullWidth onClick={addTask}>
          Добавить задачу
        </Button>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 20 }}>
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deletingTask(index)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default TodoList;
