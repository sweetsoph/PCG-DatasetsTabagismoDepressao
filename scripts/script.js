document.addEventListener('DOMContentLoaded', function() {
    // pega todos os links da navbar
    const links = document.querySelectorAll('.navbar .nav-link');
    // se o href do link for igual ao caminho atual
    links.forEach(link => {
        console.log(link.href, window.location.href);
        const currentPage = window.location.href.replace('#', '').replace('index.html', '');
        if (link.href === window.location.href) {
            // adiciona a classe active
            link.classList.add('text-primary');
        }
    });
})