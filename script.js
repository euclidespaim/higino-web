// Obtém o ano atual e insere no rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

// Função para alternar a visibilidade do menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); // Alterna a visibilidade do menu
}
