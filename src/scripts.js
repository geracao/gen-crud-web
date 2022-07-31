const body = document.querySelector("body");
const main = document.querySelector("main");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalDelete = document.querySelector(".modal-content-delete");
const modalAdd = document.querySelector(".modal-content-add");
const btnDelete = document.getElementById("btn-delete");
const btnAdd = document.getElementById("btn-add");

// Consumir API

// Usar para criar linha da tabela
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const cancelar = (e) => {
  e.preventDefault();
  modal.style.display = "none";
  modalContent.style.display = "none";
  modalDelete.style.display = "none";
  modalAdd.style.display = "none";
};

// const adicionar = () =>  { fazer POST, e atualizarTabela() }
// const deletar = (id) =>  { fazer DELETE com id, e atualizarTabela() }
// const editar = (id) =>   { fazer PUT com id, e atualizarTabela() }

btnDelete.addEventListener("click", () => {
  modal.style.display = "flex";
  modalDelete.style.display = "flex";
});

btnAdd.addEventListener("click", () => {
  modal.style.display = "flex";
  modalAdd.style.display = "flex";
});
