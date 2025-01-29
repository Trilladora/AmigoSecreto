// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let cajaAmigo = document.getElementById('amigo');
let listaAmigosHTML = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let amigo = cajaAmigo.value.trim().toUpperCase();
    if(amigo == '') {
        alert('"Por favor, inserte un nombre."');
    } else if(!amigos.includes(amigo)){
        amigos.push(amigo);
        limpiarCaja();
        actualizarListaHTML()
        console.log(amigos);
    } else {
        alert(`El nombre ${amigo} ya se encuntra incluido en la lista a sortear`);
        limpiarCaja();
    }
}


function limpiarCaja() {
    cajaAmigo.value = '';
}

function actualizarListaHTML() {
    listaAmigosHTML.innerHTML = '';
    let listaAmigosParaMostrar = ''
    amigos.forEach(amigo => {
        listaAmigosParaMostrar = listaAmigosParaMostrar + `<li>${amigo}</li>`;
    });
    listaAmigosHTML.innerHTML = listaAmigosParaMostrar;
}

function sortearAmigo() {
    let indiceAmigoSorteado = Math.floor(Math.random() * amigos.length);
    if (amigos.length == 0)
        alert('La lista de amigos esta vacía');
    else {
        resultado.innerHTML = `<li>${amigos[indiceAmigoSorteado]}</li>`;
    }
}