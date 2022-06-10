const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo')

//Get all todos
router.get("/", async (req, res) => {});

//create a todo
router.post("/todo", async (req, res) => {});

//update a todo
router.put("/todos/:todoId", async (req, res) => {});

//delete a todo 
router.delete("/todos/:todoId", async (req, res) => {
    let {todoId} = req.params

    await new todoController().deleteTodo(todoId)

    let todos = await new todoController().getTodos()

    return res.render('home',{
        todos
    })
})

module.exports = router