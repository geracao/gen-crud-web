const tbody = document.querySelector("tbody");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalDelete = document.querySelector(".modal-content-delete");
const modalAdd = document.querySelector(".modal-content-add");
const btnDelete = document.getElementById("btn-delete");
const btnAdd = document.getElementById("btn-modal-add");
const formDelete = document.getElementById("form-delete");

const url = "https://localhost:7210/api/Membro";

btnAdd.addEventListener("click", () => modalAddMember());

function addMember(newMember) {
  fetch(url, {
    method: "POST",
    body: newMember,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function modalAddMember() {
  modal.style.display = "flex";
  modalAdd.style.display = "flex";
  modalAdd.innerHTML = `
  <h1>Adicionar Membro</h1>
  <button class="x-close" onclick="cancelar(event)">
    <i class="fa-solid fa-xmark fa-xl"></i>
  </button>
  <hr />
  <form id="form-add">
    <label for="name">nome</label>
    <input type="text" name="name-add" id="name-add" placeholder="nome do membro"/>
    <label for="email">Email</label>
    <input type="email" name="email-add" id="email-add" placeholder="email do membro "/>
    <label for="github">GitHub</label>
    <input type="text" name="github-add" id="github-add" placeholder="github do membro "/>
    <label for="phone">Phone</label>
    <input type="text" name="phone-add" id="phone-add" placeholder="celular do membro "/>
    <div>
      <button onclick="cancelar(event)">Cancel</button>
      <hr />
      <button id="send" class="add">Adicionar</button>
    </div>
  </form>
  `;
  const btn = document.querySelector("#send");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name-add").value;
    const email = document.querySelector("#email-add").value;
    const github = document.querySelector("#github-add").value;
    const phone = document.querySelector("#phone-add").value;
    if (name && email && github && phone) {
      values = `{ "nome": "${name}", "email": "${email}", "github": "${github}", "phone": "${phone}"}`;
      // console.log(JSON.parse(values));
      addMember(values)
    } else {
      console.warn(`
    🚧 Favor preencha todos os campos! 🚧
    `);
    }
  });
}

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

function editMember(index) {
  console.log("opa ", index);
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

window.onload = () => getMembros();
