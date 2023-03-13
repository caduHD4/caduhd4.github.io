const camposCartao = document.getElementById("camposCartao");
const camposDinheiro = document.getElementById("camposDinheiro");
const cartao = document.getElementById("cartao");
const dinheiro = document.getElementById("dinheiro");
const pix = document.getElementById("pix");
const camposPix = document.getElementById("camposPix");
const cheque = document.getElementById("cheque");
const camposCheque = document.getElementById("camposCheque");
const trans = document.getElementById("trans");
const camposTrans = document.getElementById("camposTrans");

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
    camposDinheiro.style.display = "block";
  } else {
    camposDinheiro.style.display = "none";
  }
});

pix.addEventListener("change", function () {
  if (pix.checked) {
    camposDinheiro.style.display = "none";
    camposPix.style.display = "block";
  } else {
    camposPix.style.display = "none";
  }
});

cheque.addEventListener("change", function () {
  if (cheque.checked) {
    camposCheque.style.display = "block";
  } else {
    camposCheque.style.display = "none";
  }
});

trans.addEventListener("change", function () {
  if (trans.checked) {
    camposTrans.style.display = "block";
  } else {
    camposTrans.style.display = "none";
  }
});