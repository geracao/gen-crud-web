const body = document.querySelector("body");
const main = document.querySelector("main");
const btnDelete = document.getElementById("btn-delete");
const btnAdd = document.getElementById("btn-add");

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

btnDelete.addEventListener("click", () => {
  const modalDelete = createElement("div", "modal");
  const modalDeleteContent = createElement("div", "modal-content");

  modalDeleteContent.innerHTML = `
  <h1>Deletar Membro</h1> <button><i class="fa-solid fa-xmark fa-xl"></i></button>
  <hr />
  <span>Você tem certeza que deseja deletar esse(s) membro(s)?</span> <br/>
  <small>Essa ação não poderá ser revertida.</small> <br />
  <div>
    <button >Cancel</button> <hr/>
    <button class="delete">Delete</button>
  </div>
  `;
  modalDelete.appendChild(modalDeleteContent);
  body.insertBefore(modalDelete, main);
});

btnAdd.addEventListener("click", () => {
  console.log("apo");
});
