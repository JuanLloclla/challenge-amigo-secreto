// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//funcion para agregar amigo
function agregarAmigo() {
    //capturamos el valor del input donde escriben el nombre
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // quitamos espacios innecesarios

    //validar el nombre
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //se agrega el nombre al array
    amigos.push(nombre);

    //limpiamos la entrada
    input.value = "";

    //actualizamos la lista visual
    actualizarLista();
}

//función para actualizar lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiamos antes de actualizar

    //recorremos el array y creamos <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//función para sortear los amigos
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    //validamos que haya amigos en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue al menos un nombre antes de sortear.");
        return;
    }

    //generamos un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtenemos el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //mostramos el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
