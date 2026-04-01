import { db } from "../db/config.js";

export const renderUserTodos = async (req, res) => {
  try {
    // Get the todos for the user
    const todos = await db("todos").where({ user_id: req.user.id });

    // Render the list of todos
    res.render("todos/list", { todos });
  } catch (error) {
    // If there is an error, trigger the login dialogue
    console.log(error.message);
    res.set("WWW-Authenticate", 'Basic realm="cryptodo"');
    return res.status(401).send("Invalid credentials.");
  }
};

export const createTodo = async (req, res) => {
  try {
    const { newitem } = req.body;

    await db.raw("insert into todos (user_id, description) values (?, ?)", [
      req.user.id,
      newitem,
    ]);

    res.redirect("/todos");
  } catch (error) {
    console.log(error.message);
    res.set("WWW-Authenticate", 'Basic realm="cryptodo"');
    return res.status(401).send("Invalid credentials.");
  }
};
