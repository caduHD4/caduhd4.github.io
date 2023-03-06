function converteMaiusculo() {
    let texto = document.getElementById('texto').value;
    texto = texto.toUpperCase();
    document.getElementById('texto').value = texto;
  }
  
  function converteMinusculo() {
    let texto = document.getElementById('texto').value;
    texto = texto.toLowerCase();
    document.getElementById('texto').value = texto;
  }
  
  function convertePrimeiraLetra() {
    let texto = document.getElementById('texto').value;
    let palavras = texto.split(' ');
    for (let i = 0; i < palavras.length; i++) {
      palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].substring(1);
    }
    texto = palavras.join(' ');
    document.getElementById('texto').value = texto;
  }
  
  function convertePrimeiraLetraFrase() {
    let texto = document.getElementById('texto').value;
    texto = texto.toLowerCase();
    texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    document.getElementById('texto').value = texto;
  }
  
  