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

function gerarRecibo(FormaPaga) {
  const valor = document.getElementById('valor').value;
  const pagador = document.getElementById('pagador').value;
  const referente = document.getElementById('referente').value;
  const cpf = document.getElementById('cpf').value;
  const emissor = document.getElementById('emissor').value;
  const cpf_cnpj = document.getElementById('cpf_cnpj').value;
  const telefone = document.getElementById('telefone').value;
  const cidade = document.getElementById('cidade').value;
  const data = document.getElementById('data').value;

  

    const mensagem = `R$${valor}# Recebi(emos) de ${pagador} - CPF/CNPJ ${cpf} a importância de R$${valor} referente à ${referente}.\nPara maior clareza firmo(amos) o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevogável quitação, pelo valor recebido. ${cidade}, ${data}\nPagamento recebido por: ${referente}\n\n_____________\n${emissor}\n${cpf_cnpj}\n${telefone}`;

    const reciboDiv = document.getElementById("recibo");
    reciboDiv.innerText = mensagem;
  }

 

