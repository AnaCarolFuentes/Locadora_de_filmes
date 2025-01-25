function navegarParaSecao() {
    const select = document.getElementById("filmes");
    const valorSelecionado = select.value;

    if (valorSelecionado) {
      window.location.href = valorSelecionado; // Direciona para o ID correspondente
    }
  }
  
  function redirecionar() {
    const select = document.getElementById("filmes");
    const valorSelecionado = select.value;
  
    if (valorSelecionado) {
      window.location.href = valorSelecionado; // Redireciona para a página selecionada
    }
  }
  