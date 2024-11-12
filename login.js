document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obtém os valores dos campos de usuário e senha
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verifica se o login e senha estão corretos
        if (username === "Currículo" && password === "Motorista") {
            window.location.href = "curriculo.html"; // Redireciona para o currículo
        } else {
            // Exibe mensagem de erro
            errorMessage.textContent = "Usuário ou senha inválidos!";
        }
    });
});
