let listaDeAmigos = [];

const button = document.querySelector('.button-draw');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
  jsConfetti.addConfetti();
});

function adicionarAmigo() {
  let nomeDoNovoAmigo = document.getElementById("amigo").value;
  if (nomeDoNovoAmigo === "") {
    document.getElementById("alertaDeListaVazia").removeAttribute("hidden"); //Se a lista estiver vazia, exibe o alerta
  } else {    
    listaDeAmigos.push(nomeDoNovoAmigo);
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
  if (listaDeAmigos.length < 1) {
    document.getElementById("fimDaLista").removeAttribute("hidden");
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
