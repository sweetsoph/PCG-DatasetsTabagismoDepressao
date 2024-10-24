const scrollDown = document.getElementById('scroll-down');
const scrollUp = document.getElementById('scroll-up');

// Função para rolar suavemente até um destino específico
function smoothScroll(target) {
    window.scrollTo({
        top: target,
        behavior: 'smooth'
    });
}

// Evento de clique para a seta para baixo e para cima
scrollDown.addEventListener('click', () => {
    const footer = document.querySelector('footer');
    smoothScroll(footer.offsetTop);
});

scrollUp.addEventListener('click', () => {
    smoothScroll(0);
});

// Função para verificar se o usuário está no final da página
function toggleScrollIndicator() {
    const scrolledFromTop = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrolledFromTop >= pageHeight - 10) {
        // Se estiver no final, mostrar seta para cima e esconder a para baixo
        scrollDown.style.display = 'none';
        scrollUp.style.display = 'block';
    } else {
        // Caso contrário, mostrar seta para baixo e esconder a para cima
        scrollDown.style.display = 'block';
        scrollUp.style.display = 'none';
    }
}

// Adiciona o evento de scroll para monitorar a rolagem
window.addEventListener('scroll', toggleScrollIndicator);
