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

const traducoes = {
    pt: {
        "menu-sobre": "Sobre mim",
        "menu-serviços": "Meus Serviços",
        "menu-projetos": "Projetos",
        "menu-contato": "Contato",
        
        "h1-hello": "Olá, <span>Mundo</span>!👋​🚀​<br> Eu me chamo Cauã.",
        "span-mundo": "Mundo",
        "title-developer": "Desenvolvedor de Software",
        "paragrafo-text": "Graduando em Análise e Desenvolvimento de Sistemas, focado em transformar linhas de código em soluções inovadoras.",
        
        "btn-cv": "Baixar CV",
        "contato-btn": "Entre em contato",
        
        "title-skills": "Skills-Set",
        "title-web": "Desenvolvimento Web",
        "text-web": "Construção de aplicações web responsivas e dinâmicas, atuando na criação de interfaces modernas.",
        "title-suporte": "Suporte Técnico",
        "text-suporte": "Diagnóstico e resolução ágil de problemas tecnológicos, garantindo a estabilidade de sistemas e entregando soluções eficientes.",
        "title-freelas": "Freelance",
        "text-freelas": "Desenvolvimento de projetos sob demanda com atuação profissional como Pessoa Jurídica (PJ), focando em agilidade, comunicação direta e entrega de valor para o seu negócio.",
        "title-agentes": "Agentes de IA",
        "text-agentes": "Integração de Inteligência Artificial e desenvolvimento de chatbots, criando automações inteligentes e fluxos de trabalho otimizados.",
        
        "title-projects": "Meus Projetos",
        "title-mercado": "Mercado Livre",
        "desc-mercado": "Uma réplica responsiva da interface principal do Mercado Livre, desenvolvida com CSS Grid e manipulação otimizada do DOM.",
        "title-conversor": "Conversor de Moedas",
        "desc-conversor": "Uma aplicação web moderna para conversão de moedas que consome dados reais de uma API RESTful, oferecendo cotações atualizadas a cada 30 segundos e cálculo instantâneo.",
        "title-mario": "Mario Brothers - Encanadores",
        "desc-mario": "Um site fictício de uma empresa de encanamento inspirado nos irmãos Mario & Luigi. O projeto foi desenvolvido com HTML5, CSS3 e JavaScript, com foco em interatividade e responsividade.",
        "title-cadastro": "Cadastro de Usuários",
        "desc-cadastro": "Aplicação web para cadastro e gerenciamento de usuários, desenvolvida com React + Vite.",
        "title-formReembolso": "Formulário de Reembolso",
        "desc-formReembolso": "Formulário de reembolso com integração via API do N8n, para um Workflow de agente de IA.",
        
        "btn-acessar": "Acessar Projeto",
        
        "title-contatos": "Contato",
        "label-nome": "Seu Nome:",
        "input-name": "Seu nome",
        "label-mensagem": "Sua Mensagem:",
        "textarea-mensagem": "Digite sua mensagem...",
        "btn-enviar": "Enviar via WhatsApp",
        
        "title-redes-sociais": "Redes Sociais",
        "data-footer": "&copy; 2026 Cauã Pereira. Todos os direitos reservados.",
        
        "title-sobreMim": "Um pouco sobre mim",
        "text-p1": "Olá! Meu nome é Cauã, sou estudante de Análise e Desenvolvimento de Sistemas e um desenvolvedor apaixonado por transformar lógica complexa em interfaces funcionais e intuitivas.",
        "text-p2": "Minha jornada na programação começou na base: iniciei meus estudos com <strong>C e C++</strong>, o que me proporcionou uma compreensão profunda de algoritmos e gestão de memória. Essa solidez me permite transitar com facilidade para linguagens como <strong>Python</strong> e me adaptar rapidamente a novas stacks tecnológicas.",
        "text-p3": "Hoje, minha atuação prática é focada na construção de aplicações web modernas. Domino a trindade <strong>HTML5, CSS3 e JavaScript</strong> para criar interfaces responsivas e dinâmicas. Tenho evoluído constantemente meus projetos utilizando <strong>React.js</strong> (aplicando componentização e Hooks) e <strong>Node.js</strong> para a construção de back-end e consumo de APIs REST.",
        "text-p4": "Um dos meus grandes diferenciais é o entusiasmo pela Inteligência Artificial e automação. Tenho experiência prática na integração de APIs de IA (como o Google Gemini) e no desenvolvimento de fluxos inteligentes. Meu objetivo não é apenas escrever código, mas utilizar ferramentas modernas para otimizar o desenvolvimento e entregar soluções inovadoras.",
        "text-p5": "Sou movido por desafios técnicos e busco sempre aplicar minha versatilidade — navegando do front-end à lógica de dados — para criar sistemas que gerem resultados reais."
    },

    en: {
        "menu-sobre": "About me",
        "menu-serviços": "My Services",
        "menu-projetos": "Projects",
        "menu-contato": "Contact",
        
        "h1-hello": "Hello, <span>World</span>!👋​🚀​<br> My name is Cauã.",
        "span-mundo": "World",
        "title-developer": "Software Developer",
        "paragrafo-text": "Systems Analysis and Development student, focused on transforming lines of code into innovative solutions.",
        
        "btn-cv": "Download CV",
        "contato-btn": "Get in touch",
        
        "title-skills": "Skills-Set",
        "title-web": "Web Development",
        "text-web": "Building responsive and dynamic web applications, focusing on the creation of modern interfaces.",
        "title-suporte": "Technical Support",
        "text-suporte": "Agile diagnosis and resolution of technological issues, ensuring system stability and delivering efficient solutions.",
        "title-freelas": "Freelance",
        "text-freelas": "On-demand project development acting as an Independent Contractor (B2B), focusing on agility, direct communication, and delivering value to your business.",
        "title-agentes": "AI Agents",
        "text-agentes": "Artificial Intelligence integration and chatbot development, creating smart automations and optimized workflows.",
        
        "title-projects": "My Projects",
        "title-mercado": "Mercado Livre",
        "desc-mercado": "A responsive replica of the main Mercado Livre interface, developed with CSS Grid and optimized DOM manipulation.",
        "title-conversor": "Currency Converter",
        "desc-conversor": "A modern web application for currency conversion that consumes real data from a RESTful API, offering quotes updated every 30 seconds and instant calculation.",
        "title-mario": "Mario Brothers - Plumbers",
        "desc-mario": "A fictional website for a plumbing company inspired by the Mario & Luigi brothers. The project was developed with HTML5, CSS3, and JavaScript, focusing on interactivity and responsiveness.",
        "title-cadastro": "User Registration",
        "desc-cadastro": "Web application for user registration and management, developed with React + Vite.",
        "title-formReembolso": "Reimbursement Form",
        "desc-formReembolso": "Reimbursement form with n8n API integration for an AI agent workflow.",
        
        "btn-acessar": "View Project",
        
        "title-contatos": "Contact",
        "label-nome": "Your Name:",
        "input-name": "Your name",
        "label-mensagem": "Your Message:",
        "textarea-mensagem": "Type your message...",
        "btn-enviar": "Send via WhatsApp",
        
        "title-redes-sociais": "Social Media",
        "data-footer": "&copy; 2026 Cauã Pereira. All rights reserved.",
        
        "title-sobreMim": "A little about me",
        "text-p1": "Hello! My name is Cauã, I'm a Systems Analysis and Development student and a developer passionate about transforming complex logic into functional and intuitive interfaces.",
        "text-p2": "My programming journey started at the base: I began my studies with <strong>C and C++</strong>, which provided me with a deep understanding of algorithms and memory management. This solid foundation allows me to easily transition to languages like <strong>Python</strong> and quickly adapt to new technological stacks.",
        "text-p3": "Today, my practical work is focused on building modern web applications. I master the trinity of <strong>HTML5, CSS3, and JavaScript</strong> to create responsive and dynamic interfaces. I have constantly evolved my projects using <strong>React.js</strong> (applying componentization and Hooks) and <strong>Node.js</strong> for backend construction and REST API consumption.",
        "text-p4": "One of my great differentiators is my enthusiasm for Artificial Intelligence and automation. I have practical experience integrating AI APIs (like Google Gemini) and developing smart workflows. My goal is not just to write code, but to use modern tools to optimize development and deliver innovative solutions.",
        "text-p5": "I am driven by technical challenges and constantly seek to apply my versatility — navigating from the frontend to data logic — to create systems that generate real results."
    },
}

let idiomaAtual = 'pt'; /*Definindo o idioma principal*/
const btnIdioma = document.getElementById('btn-idioma');

function traduzirPagina() {

    const elementosParaTraduzir = document.querySelectorAll('[data-i18n]'); /*Pega todos os elementos que possuem o atributo 'data-i18n'*/
    console.log("Elementos encontrados: ", elementosParaTraduzir.length);
    console.log("Idioma atual é: ", idiomaAtual);

    elementosParaTraduzir.forEach((elemento) => {
        const chave = elemento.getAttribute('data-i18n');

        if (traducoes[idiomaAtual][chave]) {
            if (elemento.tagName === 'INPUT' || elemento.tagName === 'TEXTAREA')
                elemento.placeholder = traducoes[idiomaAtual] [chave];

            else {
                elemento.innerHTML = traducoes[idiomaAtual] [chave];
            }
        }
    });

    
    };


    btnIdioma.addEventListener('click', (event) => {
        event.preventDefault();

        if (idiomaAtual === 'pt') {
            idiomaAtual = 'en';
            btnIdioma.textContent = 'PT';
        }

        else {
            idiomaAtual = 'pt';
            btnIdioma.textContent = 'EN';
        }

        traduzirPagina();
    });



