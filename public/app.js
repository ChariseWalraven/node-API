const createTodo = () => {
  const userInput = $("#todoInput").val();
  // send post req to /todos/api
  $.post("/api/todos", { name: userInput })
  .then((newTodo) => {
    $("#todoInput").val("");
    addTodo(newTodo);
  })
  .catch(err => console.log(err))
};

const addTodo = (todo) => {
  let newTodo = $(`<li class="task">${todo.name}</li>`);
  if (todo.completed) newTodo.addClass("done");
  $(".list").append(newTodo);
}

$(document).ready(() => {
  $.getJSON("/api/todos")
    .then(addTodos)
    .catch(err => console.error(err));

  $("#todoInput").keypress(e => {
    if (e.which === 13) {
      createTodo();
    }
  });
});

const addTodos = todos => {
  todos.forEach(todo => {
    addTodo(todo);
  });
};
