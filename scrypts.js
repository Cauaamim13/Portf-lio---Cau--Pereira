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

const formContato = document.getElementById('form-contato');

formContato.addEventListener('submit', function(event) {

event.preventDefault();

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;

const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
const textoCodificado = encodeURIComponent(texto);

const numero = '21975404728';

const url = `https://whatsa.me/${numero}/?t=${textoCodificado}`;

window.open(url, '_blank');

console.log(formContato)
});

const abrirSobre = document.getElementById('btn-abrir-sobre');
const fecharSobre = document.getElementById('btn-fechar-sobre');
const modalSobre = document.getElementById('modal-sobre');

abrirSobre.addEventListener('click', (event) => {
    event.preventDefault();
    modalSobre.classList.add('ativo');
});

fecharSobre.addEventListener('click', ()=> {
    modalSobre.classList.remove('ativo');
})

modalSobre.addEventListener('click', (event)=> {
    if (event.target === modalSobre) {
        modalSobre.classList.remove('ativo')
    }
});