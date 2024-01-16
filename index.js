const name1 = document.getElementsByClassName("form-control")[0];
const form = document.getElementsByTagName("form")[0];
const bottone1 = document.getElementById("bot1");
const bottone2 = document.getElementById("bot2");
const riga = document.getElementById("riga");

let listadati = [];
class NameInput {
  constructor(_name) {
    this.name = _name;
  }
}
const removeInner = function () {
  name1.value = "";
};
// const emptyEventsRow = function () {
//   riga.innerHTML = "";
// };
const createCard = function () {
  // const newCol = document.createElement("div");
  // newCol.classList.add("col");
  // newCol.innerHTML = `
  //   <div class="col">
  //   <div class="card">
  //     <div class="card-body">${t.name}</div>
  //   </div>
  // </div>`;
  // riga.appendChild(newCol);
  removeInner();
};

bottone1.addEventListener("click", function (e) {
  e.preventDefault();
  const dati = new NameInput(name1.value);
  listadati.push(dati);
  localStorage.setItem("listadati", JSON.stringify(listadati));
  createCard();
});
bottone2.addEventListener("click", function (c) {
  c.preventDefault();
  const string = localStorage.getItem("listadati");
  const array = JSON.parse(string);

  const i = array.length;
  array.splice(i, 1);
  localStorage.removeItem("listadati");
  localStorage.setItem("listadati", JSON.stringify(listadati));
});

if (sessionStorage.getItem("count") !== "undefined") {
  let count = sessionStorage.getItem("count");
  if (count === 0) {
    count = 0;
  }
  setInterval(function () {
    count++;
    sessionStorage.setItem("count", count);
  }, 1000);
}
