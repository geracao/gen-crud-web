const tbody = document.querySelector("tbody");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalDelete = document.querySelector(".modal-content-delete");
const modalUpdate = document.querySelector(".modal-content-update");
const modalAdd = document.querySelector(".modal-content-add");
const btnDelete = document.getElementById("btn-delete");
const btnAdd = document.getElementById("btn-modal-add");
const formDelete = document.getElementById("form-delete");
const url = "https://localhost:7210/api/Membro";

// X-button
const cancelar = (e) => {
  e.preventDefault();
  modal.style.display = "none";
  modalContent.style.display = "none";
  modalDelete.style.display = "none";
  modalAdd.style.display = "none";
  modalUpdate.style.display = "none"
};

// GET
window.onload = () => getMembros();

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
      <button id="" class='nonstyle-button' onclick="modalUpdateMember(${member.id})">
        <i class="fa-solid fa-pen"></i>
      </button>
      <button id="" btn-delete class='nonstyle-button' onclick="deleteMember(${member.id})">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  `;

  tbody.appendChild(tr);
}

// ADD
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
    <label for="name">Nome:</label>
    <input 
      class="form-input"
      type="text" 
      name="name-add" 
      id="name-add" 
      placeholder="nome do membro" 
      required 
      minlength="3" 
      maxlength="255" 
      alt="digite seu nome" 
      title="digite seu nome"
      />
    <label for="email">Email:</label>
    <input 
      class="form-input"
      type="email" 
      name="email-add" 
      id="email-add" 
      placeholder="email do membro" 
      required 
      minlength="3" 
      maxlength="255" 
      title="digite seu email"
      />
    <label for="github">GitHub:</label>
    <input 
      class="form-input"
      type="text" 
      name="github-add" 
      id="github-add" 
      placeholder="github do membro" 
      required 
      minlength="3" 
      maxlength="255" 
      title="digite seu github"
      />
    <label for="phone">Phone:</label>
    <input 
      class="form-input"
      type="text" 
      name="phone-add" 
      id="phone-add" 
      placeholder="celular do membro" 
      required 
      minlength="3" 
      maxlength="17" 
      title="digite seu telefone ou celular"
      />
    <div>
      <button onclick="cancelar(event)">Cancel</button>
      <hr />
      <button id="send-add" class="add">Adicionar</button>
    </div>
  </form>
  `;
  const btn = document.querySelector("#send-add");
  btn.addEventListener("click", (e) => {
    const name = document.querySelector("#name-add").value;
    const email = document.querySelector("#email-add").value;
    const github = document.querySelector("#github-add").value;
    const phone = document.querySelector("#phone-add").value;
    if (name && email && github && phone) {
      values = `{ "nome": "${name}", "email": "${email}", "github": "${github}", "phone": "${phone}"}`;
      addMember(values);
    } else {
      e.preventDefault();
      console.warn(`
        🚧 Favor preencha todos os campos! 🚧
      `);
    }
  });
}

// UPDATE
function modalUpdateMember(id) {
  modal.style.display = "flex";
  modalUpdate.style.display = "flex";
  console.log(id);
  modalUpdate.innerHTML = `
  <h1>Editar Membro</h1>
  <button class="x-close" onclick="cancelar(event)">
    <i class="fa-solid fa-xmark fa-xl"></i>
  </button>
  <hr />
  <form>
    <label for="name">nome</label>
    <input
      type="text"
      name="name-edit"
      id="name-edit"
      required
      minlength="3"
      minlength="3"
      alt="digite seu nome"
      title="digite seu nome"
    />
    <label for="email">Email</label>
    <input
      type="text"
      name="email-edit"
      id="email-edit"
      required
      minlength="3"
      maxlength="255"
      alt="digite seu email"
      title="digite seu email"
    />
    <label for="github">GitHub</label>
    <input
      type="text"
      name="github-edit"
      id="github-edit"
      required
      minlength="3"
      maxlength="255"
      alt="digite seu github"
      title="digite seu github"
    />
    <label for="phone">Phone</label>
    <input
      type="text"
      name="phone-edit"
      id="phone-edit"
      required
      minlength="3"
      maxlength="17"
      alt="digite seu telefone ou celular"
      title="digite seu celular"
    />
    <div>
      <button onclick="cancelar(event)">Cancel</button>
      <hr />
      <button id="send-edit" class="edit">Editar</button>
    </div>
  </form>
  `;
  const btn = document.querySelector("#send-edit");
  btn.addEventListener("click", (e) => {
    const name = document.querySelector("#name-edit").value;
    const email = document.querySelector("#email-edit").value;
    const github = document.querySelector("#github-edit").value;
    const phone = document.querySelector("#phone-edit").value;
    if (name && email && github && phone) {
      values = `{ "nome": "${name}", "email": "${email}", "github": "${github}", "phone": "${phone}"}`;
      updateMember(values, id);
    } else {
      e.preventDefault();
      console.warn(`
        🚧 Favor preencha todos os campos! 🚧
      `);
    }
  });
}

function updateMember(updatedMember, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: updatedMember,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// DELETE
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