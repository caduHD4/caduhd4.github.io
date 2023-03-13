const camposCartao = document.getElementById("camposCartao");
const camposDinheiro = document.getElementById("camposDinheiro");
const cartao = document.getElementById("cartao");
const dinheiro = document.getElementById("dinheiro");

cartao.addEventListener("change", function() {
  if (cartao.checked) {
    camposCartao.style.display = "block";
  } else {
    camposCartao.style.display = "none";
  }
});

dinheiro.addEventListener("change", function() {
  if (dinheiro.checked) {
    camposDinheiro.style.display = "block";
  } else {
    camposDinheiro.style.display = "none";
  }
});


