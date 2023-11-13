const lista = document.querySelector("#lista");
const input = document.querySelector("#item");
const button = document.querySelector("#button");

button.addEventListener("click", addItem);

function addItem() {
  const item = document.createElement("li");
  const span = document.createElement("span");
  const poistaNappi = document.createElement("button");
  poistaNappi.addEventListener("click", function () {
    deleteItem(poistaNappi, item);
  });
  poistaNappi.textContent = "Delete";
  span.textContent = input.value;
  item.appendChild(span);
  item.appendChild(poistaNappi);
  lista.appendChild(item);
  input.value = "";
  input.focus();
}

function deleteItem(deleteButton, listItem) {
  lista.removeChild(listItem);
}
