const slideProjetos = document.querySelector('.projetos-card');
const botaoVoltar = document.getElementById('btn-voltar');
const botaoAvancar = document.getElementById('btn-avancar');

const tamanhodoPulo = 385;

botaoAvancar.addEventListener('click', ()=> {
    slideProjetos.scrollBy({
        left: tamanhodoPulo,
        behavior: 'smooth'
    });
})

botaoVoltar.addEventListener('click', ()=> {
slideProjetos.scrollBy({
    left: -tamanhodoPulo,
    behavior: 'smooth',
});
});