const camposCartao = document.getElementById("camposCartao");
const camposDinheiro = document.getElementById("camposDinheiro");
const cartao = document.getElementById("cartao");
const dinheiro = document.getElementById("dinheiro");

cartao.addEventListener("change", function() {
  if (cartao.checked) {
    camposDinheiro.style.display = "none";
    camposCartao.style.display = "block";
  } else {
    camposCartao.style.display = "none";
  }
});

dinheiro.addEventListener("change", function() {
  if (dinheiro.checked) {
    camposCartao.style.display = "none";
    // exibe a div do dinheiro
    camposDinheiro.style.display = "block";
  } else {
    camposDinheiro.style.display = "none";
  }
});


