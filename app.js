let listaDeAmigos = [];

function alertaDeListaVazia() {
    document.getElementById('alertaDeListaVazia').removeAttribute('hidden');
}

function esconderAlertaDeListaVazia() {
    document.getElementById('esconderAlertaDeListaVazia').setAttribute('hidden',true);
}

function adicionarAmigo() {
  let novoAmigo = document.getElementById('amigo').value;
  if (novoAmigo === '') {
    alertaDeListaVazia();
  } else {
    listaDeAmigos.push(novoAmigo);
    document.getElementById('amigo').value = '';
    console.log(listaDeAmigos);
  }

}

function mostrarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';
   
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        li.appendChild(li);
    }

}





















// function adicionarAmigo() {
//     document.getElementById('amigo').innerHTML = listaDeAmigos.push();
//     console.log(listaDeAmigos);

// }

// function gerarNomeAleatorio(){
//     let amigo = parseInt(Math.random() * listaDeAmigos.length, 10);
//     if (amigo.includes)
// }
