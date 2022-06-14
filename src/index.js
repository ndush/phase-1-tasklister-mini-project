document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    setToDo(e.target.task.value);
    form.reset();
  });
})

function setToDo(todo) {
  let li = document.createElement("li");
  let btn = document.createElement("button");

  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  li.textContent = `${todo}  `;

  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
  
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
