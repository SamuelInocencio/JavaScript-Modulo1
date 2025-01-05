// Função para enviar o formulário
document.getElementById('contato-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe a mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.classList.remove('hidden');

    // Limpa os campos do formulário
    this.reset();

    // Oculta a mensagem de sucesso após 3 segundos
    setTimeout(() => {
        mensagemSucesso.classList.add('hidden');
    }, 3000);
});