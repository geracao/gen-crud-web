const tbody = document.querySelector("tbody");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalDelete = document.querySelector(".modal-content-delete");
const modalAdd = document.querySelector(".modal-content-add");
const btnDelete = document.getElementById("btn-delete");
const btnAdd = document.getElementById("btn-modal-add");

//#region 
// var myHeaders = new Headers();

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };

// var myRequest = new Request('flowers.jpg', myInit);

// fetch(myRequest)
// .then(function(response) {
//   return response.blob();
// })
// .then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });
//#endregion

const url = "https://localhost:7210/api/Membro";

function teste(){
  fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(JSON.stringify(data)))
  .catch((error) => console.error(error))
}

teste()

//#region 
// async function getUsers() {
  //   const membros = await get(url)
//   const nome = await get(membros.data.nome)
//   console.log(nome);
//   // axios
//   //   .get(url)
//   //   .then((response) => (console.log(JSON.stringify(response.data))))
//   //   .catch((error) => console.error(error));
// }

// getUsers()



// function getUser(id) {
//   axios
//     .get(`${url}/${id}`)
//     .then((response) => {
//       // userId.textContent = response.data.id;
//       // userName.textContent = response.data.name;
//       // userCity = response.data.city;
//       // userAvatar.src = response.data.avatar;
//     })
//     .catch((error) => console.error(error));
// }

// function addNewUser(newUser) {
//   axios
//     .post(url, newUser)
//     .then((response) => (alertApi.textContent = JSON.stringify(response.data)))
//     .catch((error) => console.error(error));
// }

// function updateUser(updatedUser, id) {
//   axios
//     .put(`${url}/${id}`, updatedUser)
//     .then((response) => (alertApi.textContent = JSON.stringify(response.data)))
//     .catch((error) => console.error(error));
// }

// function deleteUser(id) {
//   axios
//     .delete(`${url}/${id}`)
//     .then((response) => console.log(response))
//     .catch((error) => console.error(error));
// }

// function loadItens() {
//   itens = getUsers();
//   tbody.innerHTML = "";
//   itens.forEach((item, index) => {
//     insertItem(item, index);
//   });
// }

// // loadItens()

// function insertItem(item, index) {
  //   let tr = document.createElement("tr");
  
  //   tr.innerHTML = `
  //     <td class="body-checkbox"><input type="checkbox" /></td>
  //     <td>${item.nome}</td>
  //     <td>${item.email}</td>
  //     <td>${item.github}</td>
  //     <td>${item.phone}</td>
  //     <td>
//       <button class='nonstyle-button' onclick="editItem(${index})">
//         <i class="fa-solid fa-pen"></i>
//       </button>
//       <button class='nonstyle-button' onclick="deleteItem(${index})>
//         <i class="fa-solid fa-trash"></i>
//       </button>
//     </td>
//   `;

//   tbody.appendChild(tr)
// }

// function editItem(index) {
  
// }

// function deleteItem(index) {
//   itens.splice(index, 1)
//   deleteUser(itens)
// }

// Usar para criar linha da tabela
//#endregion 

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
