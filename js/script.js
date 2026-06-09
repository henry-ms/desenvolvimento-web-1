// JavaScript do projeto - Desenvolvimento Web I

// --- Página Conteúdos: mostrar/esconder a descrição de cada tópico ---
function mostrarDetalhe(id) {
  var detalhe = document.getElementById(id);
  if (detalhe.style.display === "block") {
    detalhe.style.display = "none";
  } else {
    detalhe.style.display = "block";
  }
}

// --- Página Contato: validação simples do formulário ---
function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var aviso = document.getElementById("aviso");

  // Verifica se os campos foram preenchidos
  if (nome.trim() === "" || mensagem.trim() === "") {
    aviso.className = "mensagem alert alert-danger";
    aviso.style.display = "block";
    aviso.innerHTML = "Por favor, preencha o nome e a mensagem antes de enviar.";
    return false;
  }

  // Se estiver tudo certo, mostra mensagem de sucesso
  aviso.className = "mensagem alert alert-success";
  aviso.style.display = "block";
  aviso.innerHTML = "Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.";

  // Limpa os campos
  document.getElementById("nome").value = "";
  document.getElementById("mensagem").value = "";

  return false; // evita recarregar a página (projeto sem servidor)
}
