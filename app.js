let listaDeAmigos = [];

function alertaDeListaVazia() {
  document.getElementById("alertaDeListaVazia").removeAttribute("hidden");
}

function esconderAlertaDeListaVazia() {
  document.getElementById("esconderAlertaDeListaVazia").setAttribute("hidden");
}

function adicionarAmigo() {
  let novoAmigo = document.getElementById("amigo").value;
  if (novoAmigo === "") {
    alertaDeListaVazia();
  } else {
    listaDeAmigos.push(novoAmigo);
    document.getElementById("amigo").value = "";
    mostrarListaDeAmigos();
    console.log(listaDeAmigos);
  }
}

function mostrarListaDeAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < listaDeAmigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = listaDeAmigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    alert("a lista esta vazia");
  } else {
    let numeroDaListaSorteado = Math.floor(
      Math.random() * listaDeAmigos.length
    );
    mostrarResultadoSorteio(listaDeAmigos[numeroDaListaSorteado]);
    listaDeAmigos.splice(numeroDaListaSorteado, 1);
  }
}

function mostrarResultadoSorteio(amigoSorteado) {
  let resultadoAmigoSecreto = document.getElementById("resultado");
  resultadoAmigoSecreto.innerHTML = "";

  let li = document.createElement("li");
  li.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
  resultadoAmigoSecreto.appendChild(li);
}
