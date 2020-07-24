class item{
	constructor(name){
	     this.name;
	}
}

class UI{
  //Agrega nuevo producto
	addItem(objItem){
	let elementoPadre = document.querySelector(".list-items");
	let nuevoElemento = document.createElement("div");
	nuevoElemento.innerHTML = `
	<div>
		<input type="text" class="txtItemLine" readonly="readonly" value=${objItem.name}>
		<button name="update" class="btnUpdateItem">Update</button>
		<button name="delete" class="btnDeleteItem">Delete</button>
	</div>`;
	elementoPadre.appendChild(nuevoElemento);
}

//Elimina producto seleccionado
deleteItem(e){
	//let elemento = e.target
	let elementoPadre = document.querySelector(".list-items");

	e.parentNode.parentNode.removeChild(e.parentNode);
}

//Actualiza nuevo producto
updateItem(e){
	let txtItemLine = e.parentElement.querySelector(".txtItemLine");
	txtItemLine.value = "actualizar";
	txtItemLine.focus(); 
	txtItemLine.removeAttribute("readonly");
	}
}

//-------------------Lista de eventos

let btnAdd = document.querySelector("#btnAddItem");
btnAdd.addEventListener("click",function(){
  // alert("Function Add Item");
  let objItem = new item();
  objItem.name = document.querySelector("#txtItemName").value;
  let objUI = new UI();
  objUI.addItem(objItem);
});

document.addEventListener("click",function(e){
  let element = e.target;
  if (element.getAttribute("name") === "delete"){
  let objUI = new UI();
  objUI.deleteItem(element);
  }
  else if (element.getAttribute("name") === "update"){
    let objUI = new UI();
    objUI.updateItem(element);
  }
});
