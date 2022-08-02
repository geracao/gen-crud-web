const tbody = document.querySelector("tbody");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalDelete = document.querySelector(".modal-content-delete");
const modalAdd = document.querySelector(".modal-content-add");
const btnDelete = document.getElementById("btn-delete");
const btnAdd = document.getElementById("btn-modal-add");
const formDelete = document.getElementById("form-delete");

const url = "https://localhost:7210/api/Membro";

function getMembros() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      itens = data;
      tbody.innerHTML = "";
      itens.forEach((member) => {
        insertMember(member);
      });
    })
    .catch((error) => console.error(error));
}

function insertMember(member) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${member.nome}</td>
    <td>${member.email}</td>
    <td>${member.github}</td>
    <td>${member.phone}</td>
    <td>
      <button id="" class='nonstyle-button' onclick="editMember(${member.id})">
        <i class="fa-solid fa-pen"></i>
      </button>
      <button id=""btn-delete class='nonstyle-button' onclick="deleteMember(${member.id})">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  `;

  tbody.appendChild(tr);
}

function deleteMember(id) {
  console.log("id do membro: " + id);
  modal.style.display = "flex";
  modalDelete.style.display = "flex";

  let divDelete = document.getElementById("div-delete");
  divDelete.innerHTML = `
  <button onclick="cancelar(event)">Cancel</button>
  <hr />
  <button onclick="deleteUser(${id})" class="delete">Delete</button>
  `;
  formDelete.appendChild(divDelete);
}

function deleteUser(id) {
  console.log(id + " removido");
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

const cancelar = (e) => {
  e.preventDefault();
  modal.style.display = "none";
  modalContent.style.display = "none";
  modalDelete.style.display = "none";
  modalAdd.style.display = "none";
};

//#region Ainda precisa Implementar

// function getUserById(id) {
//   fetch(`${url}/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       userName.textContent = data.name;
//       userCity.textContent = data.city;
//       userAvatar.src = data.avatar;
//     })
//     .catch((error) => console.error(error));
// }
function editMember(index) {
  console.log("opa ", index);
}

function adicionar() {
  console.log();
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

// Usar para criar linha da tabela
//#endregion

btnAdd.addEventListener("click", () => {
  modal.style.display = "flex";
  modalAdd.style.display = "flex";
});

window.onload = () => getMembros();
