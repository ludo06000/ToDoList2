var enterBtn = document.getElementById("enterBtn");
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


// Créer un élément pour pouvoir le rajouter à la liste
function createListElement(){
    var li =  document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";

    function done(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", done)

    var deleteBtn = document.createElement("button");
    var i = document.createElement("i");
    i.className = "fas fa-trash"
    deleteBtn.appendChild(i);
    li.appendChild(deleteBtn);

    function deleteItem(){
        li.classList.add("delete");
    }

    deleteBtn.addEventListener("click", deleteItem)
}

// Création d'une focntion qui vérifie si le champs input est rempli
function addListVerifAfterClick(){
    if (userInput.value.length > 0){
        createListElement()
    }else{
        alert("Vous n'avez rien inscrit sur la tache !")
    }
}

enterBtn.addEventListener("click", addListVerifAfterClick);

//création d'une fonction qui permet de valider avec la touche Enter
function addListVerifAfterEnter(e){
    if(userInput.value.length > 0 && e.key === "Enter"){
        createListElement()
    }
}

userInput.addEventListener("keypress", addListVerifAfterEnter);