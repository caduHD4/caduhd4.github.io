

const paymentRadios = document.querySelectorAll('input[name="FormaPaga"]');
const opCartao = document.getElementById('opCartao');
const opCheque = document.getElementById('opCheque');
const opDinheiro = document.getElementById('opDinheiro');
const opTrans = document.getElementById('opTrans');
const opPix = document.getElementById('opPix');

function showOptions(FormaPaga) {
  if (FormaPaga === 'cartao') {
    opCartao.style.display = 'block';
  } else {
    opCartao.style.display = 'none';
  }

  if (FormaPaga === 'cheque') {
    opCheque.style.display = 'block';
  } else {
    opCheque.style.display = 'none';
  }

  if (FormaPaga === 'trans') {
    opTrans.style.display = 'block';
  } else {
    opTrans.style.display = 'none';
  }

  if (FormaPaga === 'dinheiro') {
    opDinheiro.style.display = 'block';
  } else {
    opDinheiro.style.display = 'none';
  }

  if (FormaPaga === 'pix') {
    opPix.style.display = 'block';
  } else {
    opPix.style.display = 'none';
  }

}

paymentRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const FormaPaga = document.querySelector('input[name="FormaPaga"]:checked').value;
    showOptions(FormaPaga);
  });
});



const mensagem = `${valor}# Recebi(emos) de ${pagador} a importância de ${valor} referente à ${beneficiario}.\nPara maior clareza firmo(amos) o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevogável quitação, pelo valor recebido.\nPagamento recebido por: ${beneficiario} - chave pix: ${chavePix} - ${banco}\n\n${data}\n_____________\n${nomeAssinante}\n${cpfAssinante}\n${telefoneAssinante}`;

const reciboDiv = document.getElementById("recibo");
reciboDiv.innerText = mensagem;
