var name = "";
var email = "";
var tel = "";
var names = [];
var names2 = "";
var userTR = document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit", (e) => {
	e.preventDefault();
	Create();
	Read();
	document.getElementById("form").reset();
});

function Create() {
	let storage = JSON.parse(localStorage.getItem("names"));
	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	tel = document.getElementById("tel").value;
	let contato = {
		nome: name,
		email: email,
		telefone: tel
	};
	if (name == "" || email == "" || tel == "") {
		alert("Preencha corretamente os campos!");
	} else {
		if (storage == null) {
			names.push(contato);
			localStorage.setItem("names", JSON.stringify(names));
		} else {
			names = JSON.parse(localStorage.getItem("names"));
			names.push(contato);
			localStorage.setItem("names", JSON.stringify(names));
		}
	}
}

function Read() {
	userTR.innerHTML = "";
	names2 = JSON.parse(localStorage.getItem("names"));
	if (names2 != null) {
		for (let i = 0; i < names2.length; i++) {
			userTR.innerHTML += 
			`<div class="bg-dark border border-success text-white card mb-2">
				<div class="card-body">
					<p><i class="fa fa-user"> Nome: ${names2[i].nome}</i></p>
					<p><i class="fa fa-at"> E-mail: ${names2[i].email}</i></p>
					<p><i class="fa fa-phone"> Telefone: ${names2[i].telefone}</i></p>
					<button class="col-5 text-white btn btn-warning" onclick="Update(${i})"><i class="fa fa-edit"></i> Editar</button>
					<button class="col-5 text-white btn btn-danger" onclick="Delete(${i})"><i class="fa fa-trash"></i> Excluir</button>
				</div>
			</div>`;
		}
	}
}

function Update(index) {
	let names3 = JSON.parse(localStorage.getItem("names"));
	userTR.innerHTML = "";
	for (let i = 0; i < names3.length; i++) {
		if (i == index) {
			userTR.innerHTML += 
			`<div class="bg-dark border border-danger text-white card mb-2">
				<div class="card-body">
					<p><i class="fa fa-user"> Nome:</i></p>
					<input id="newName" class="mb-2 form-control" placeholder="${names3[i].nome}"></input>
					<p><i class="fa fa-at"> E-mail:</i></p>
					<input id="newEmail" class="mb-2 form-control" placeholder="${names3[i].email}"></input>
					<p><i class="fa fa-phone"> Telefone:</i></p>
					<input id="newTel" class="mb-2 form-control" placeholder="${names3[i].telefone}"></input>
					<button class="col-5 text-white btn btn-success" onclick="Update2(${i})"><i class="fa fa-edit"></i> Atualizar</button>
					<button class="col-5 text-white btn btn-danger" onclick="Read()"><i class="fa fa-ban"></i> Cancelar</button>
				</div>
			</div>`;
		} else {
			userTR.innerHTML += 
			`<div class="bg-dark border border-success text-white card mb-2">
				<div class="card-body">
					<p><i class="fa fa-user"> Nome: ${names2[i].nome}</i></p>
					<p><i class="fa fa-at"> E-mail: ${names2[i].email}</i></p>
					<p><i class="fa fa-phone"> Telefone: ${names2[i].telefone}</i></p>
					<button disabled class="col-5 text-white btn btn-warning" onclick="Update(${i})"><i class="fa fa-edit"></i> Editar</button>
					<button disabled class="col-5 text-white btn btn-danger" onclick="Delete(${i})"><i class="fa fa-trash"></i> Excluir</button>
				</div>
			</div>`;
		}
	}
}

function Update2(index) {
	let names4 = JSON.parse(localStorage.getItem("names"));
	names4[index].nome = document.getElementById("newName").value;
	names4[index].email = document.getElementById("newEmail").value;
	names4[index].telefone = document.getElementById("newTel").value;
	if(names4[index].nome == "" || names4[index].email == "" || names4[index].telefone == "") {
		alert("Preencha corretamente os campos!");
	} else {
		localStorage.setItem("names", JSON.stringify(names4));
		Read();
	}
}

function Delete(index) {
	let names5 = JSON.parse(localStorage.getItem("names"));
	names5.splice(index,1);
	localStorage.setItem("names", JSON.stringify(names5));
	Read();
}