const createTodo = () => {
  const usrInput = $("#todoInput").val();
  $.post("/api/todos", { name: usrInput })
  .then((newTodo) => {
    $("#todoInput").val("");
    addTodo(newTodo);
  })
  .catch(err => console.log(err))
};

const addTodo = (todo) => {
  let newTodo = $(`<li class="task">${todo.name}<span>X</span></li>`);
  newTodo.data("id", todo._id);
  newTodo.data("completed", todo.completed);
  if (todo.completed) newTodo.addClass("done");
  $(".list").append(newTodo);
}

const removeTodo = (todo)  => {
  const id = todo.data("id")
    $.ajax({
      method: "DELETE",
      url: `/api/todos/${id}`
    })
    .then(data => {
      todo.remove();
    })
    .catch(err => console.error(err));
};

const updateTodo = (todo) => {
  const id = todo.data("id")
  const isDone = !todo.data("completed")
  const updateData = { completed: isDone }
  $.ajax({
    method: "PUT",
    url: `/api/todos/${id}`,
    data: updateData
  })
  .then(updatedTodo => {
    todo.toggleClass("done");
    todo.data("completed", isDone);
  })
  .catch(err => console.error(err));
};

$(document).ready(() => {
  $.getJSON("/api/todos")
    .then(addTodos)
    .catch(err => console.error(err));

  $("#todoInput").keypress(e => {
    if (e.which === 13) {
      createTodo();
    };
  });

  $(".list").on('click', "li", function(){
    updateTodo($(this));
  });

  $(".list").on("click", "span", function(e){
    e.stopPropagation();
    removeTodo($(this).parent());
  });
});

const addTodos = todos => {
  todos.forEach(todo => {
    addTodo(todo);
  });
};
