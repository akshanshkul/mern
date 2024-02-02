// create variable for request and add controllers for request handels 
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./controllers/Todo");

// use router 
const router = require("express").Router();

// Get and send request 
router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

// all url router 
router.get("/todos/list", getTodos);

router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

// export route that use in index to handel request
module.exports = router;
