// init modal 
const Todo = require("../model/Todo");

// Get all todos from the database and display them in the table.
const getTodos = (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      res.send(err);
    }
    res.json(todos);
  });
};
// create new todos
const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    about: req.body.about,
    completed: req.body.completed,
  });

  todo.save((err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(todo);
  });
};
// update todos 
const updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    },
    { new: true },
    (err, Todo) => {
      if (err) {
        res.send(err);
      } else res.json(Todo);
    }
  );
};
// delete todos 
const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};
// export all controllers
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
