var name = "";
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
    if(name == "") {
        alert("Write the name");
    } else {
        if(storage == null) {
            names.push(name);
            localStorage.setItem("names", JSON.stringify(names));
        } else {
            names = JSON.parse(localStorage.getItem("names"));
            names.push(name);
            localStorage.setItem("names", JSON.stringify(names));
        }
    }
}

function Read() {
    userTR.innerHTML = "";
    names2 = JSON.parse(localStorage.getItem("names"));
    if(names2 != null) {
        for(let i=0; i < names2.length; i++) {
            userTR.innerHTML += `
                <div class="bg-dark border border-success text-white card mb-2">
                    <div class="card-body">
                        <p><i class="fa fa-user"> User: ${names2[i]}</i></p>
                        <button class="col-5 text-white btn btn-warning" onclick="Update(${i})"><i class="fa fa-edit"></i> Edit</button>
                        <button class="col-5 text-white btn btn-danger" onclick="Delete(${i})"><i class="fa fa-trash"></i> Delete</button>
                    </div>
                </div>
            `
        }
    }
}