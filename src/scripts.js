const tbody = document.querySelector("tbody");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalDelete = document.querySelector(".modal-content-delete");
const modalAdd = document.querySelector(".modal-content-add");
const btnDelete = document.getElementById("btn-delete");
const btnAdd = document.getElementById("btn-modal-add");

const url = "https://localhost:7210/api/Membro";

function getMembros() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      itens = data;
      tbody.innerHTML = "";
      itens.forEach((item, index) => {
        insertItem(item, index);
      });
    })
    .catch((error) => console.error(error));
}

function insertItem(item, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>${item.github}</td>
    <td>${item.phone}</td>
    <td class="actions-body">
      <button class='nonstyle-button' onclick="editItem(${index})">
        <i class="fa-solid fa-pen"></i>
      </button>
      <button class='nonstyle-button' onclick="deleteItem(${index})">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  `;

  tbody.appendChild(tr);
}

const cancelar = (e) => {
  e.preventDefault();
  modal.style.display = "none";
  modalContent.style.display = "none";
  modalDelete.style.display = "none";
  modalAdd.style.display = "none";
};

btnDelete.addEventListener("click", () => {
  modal.style.display = "flex";
  modalDelete.style.display = "flex";
});

btnAdd.addEventListener("click", () => {
  modal.style.display = "flex";
  modalAdd.style.display = "flex";
});

window.onload = () => getMembros();

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
function editItem(index) {
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

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

// function deleteItem(index) {
//   itens.splice(index, 1)
//   deleteUser(itens)
// }

// Usar para criar linha da tabela
//#endregion