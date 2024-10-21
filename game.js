// Array de elementos da tabela periódica
const elementos = [
    { symbol: 'H', number: 1, name: 'Hidrogênio', hint: 'Gás leve e inflamável.' },
    { symbol: 'He', number: 2, name: 'Hélio', hint: 'Gás nobre, mais leve que o ar.' },
    { symbol: 'Li', number: 3, name: 'Lítio', hint: 'Usado em baterias.' },
    { symbol: 'Be', number: 4, name: 'Berílio', hint: 'Metálico, usado em ligas.' },
    { symbol: 'B', number: 5, name: 'Boro', hint: 'Usado em detergentes.' },
    { symbol: 'C', number: 6, name: 'Carbono', hint: 'Base da vida, presente em tudo.' },
    { symbol: 'N', number: 7, name: 'Nitrogênio', hint: 'Componente do ar que respiramos.' },
    { symbol: 'O', number: 8, name: 'Oxigênio', hint: 'Essencial para a respiração.' },
    { symbol: 'F', number: 9, name: 'Flúor', hint: 'Usado em pasta de dente.' },
    { symbol: 'Ne', number: 10, name: 'Neônio', hint: 'Gás nobre, usado em sinais luminosos.' },
    { symbol: 'Na', number: 11, name: 'Sódio', hint: 'Usado em sal de cozinha.' },
    { symbol: 'Mg', number: 12, name: 'Magnésio', hint: 'Usado em fogos de artifício.' },
    { symbol: 'Al', number: 13, name: 'Alumínio', hint: 'Leve e resistente, usado em embalagens.' },
    { symbol: 'Si', number: 14, name: 'Silício', hint: 'Usado em eletrônicos.' },
    { symbol: 'P', number: 15, name: 'Fósforo', hint: 'Usado em fertilizantes.' },
    { symbol: 'S', number: 16, name: 'Enxofre', hint: 'Usado em fertilizantes e pólvora.' },
    { symbol: 'Cl', number: 17, name: 'Cloro', hint: 'Usado em desinfetantes.' },
    { symbol: 'Ar', number: 18, name: 'Argônio', hint: 'Gás nobre, usado em lâmpadas.' },
    { symbol: 'K', number: 19, name: 'Potássio', hint: 'Importante para funções biológicas.' },
    { symbol: 'Ca', number: 20, name: 'Cálcio', hint: 'Essencial para os ossos.' },
    { symbol: 'Sc', number: 21, name: 'Escândio', hint: 'Usado em ligas metálicas.' },
    { symbol: 'Ti', number: 22, name: 'Titânio', hint: 'Muito forte e leve.' },
    { symbol: 'V', number: 23, name: 'Vanádio', hint: 'Usado em ligas para aumentar a resistência.' },
    { symbol: 'Cr', number: 24, name: 'Cromo', hint: 'Usado em ligas e como revestimento.' },
    { symbol: 'Mn', number: 25, name: 'Manganês', hint: 'Usado em aço.' },
    { symbol: 'Fe', number: 26, name: 'Ferro', hint: 'Usado em construção e fabricação de aço.' },
    { symbol: 'Co', number: 27, name: 'Cobalto', hint: 'Usado em ímãs.' },
    { symbol: 'Ni', number: 28, name: 'Níquel', hint: 'Usado em moedas e ligas.' },
    { symbol: 'Cu', number: 29, name: 'Cobre', hint: 'Usado em fiação elétrica.' },
    { symbol: 'Zn', number: 30, name: 'Zinco', hint: 'Usado para galvanização.' },
    { symbol: 'Ga', number: 31, name: 'Gálio', hint: 'Usado em LEDs.' },
    { symbol: 'Ge', number: 32, name: 'Germânio', hint: 'Usado em eletrônicos.' },
    { symbol: 'As', number: 33, name: 'Arsênio', hint: 'Usado em semicondutores.' },
    { symbol: 'Se', number: 34, name: 'Selênio', hint: 'Utilizado em células solares.' },
    { symbol: 'Br', number: 35, name: 'Bromo', hint: 'Líquido vermelho escuro, tóxico.' },
    { symbol: 'Kr', number: 36, name: 'Criptônio', hint: 'Gás nobre, usado em iluminação.' },
    { symbol: 'Rb', number: 37, name: 'Rubídio', hint: 'Usado em relógios atômicos.' },
    { symbol: 'Sr', number: 38, name: 'Estrôncio', hint: 'Usado em fogos de artifício.' },
    { symbol: 'Y', number: 39, name: 'Ítrio', hint: 'Usado em lasers e LEDs.' },
    { symbol: 'Zr', number: 40, name: 'Zircônio', hint: 'Resistente a corrosão.' },
    { symbol: 'Nb', number: 41, name: 'Nióbio', hint: 'Usado em supercondutores.' },
    { symbol: 'Mo', number: 42, name: 'Molibdênio', hint: 'Usado em ligas metálicas.' },
    { symbol: 'Tc', number: 43, name: 'Tecnécio', hint: 'Usado em medicina nuclear.' },
    { symbol: 'Ru', number: 44, name: 'Rutênio', hint: 'Usado em ligas de alta resistência.' },
    { symbol: 'Rh', number: 45, name: 'Ródio', hint: 'Usado em catalisadores.' },
    { symbol: 'Pd', number: 46, name: 'Paládio', hint: 'Usado em joias e eletrônicos.' },
    { symbol: 'Ag', number: 47, name: 'Prata', hint: 'Usado em joias e utensílios.' },
    { symbol: 'Cd', number: 48, name: 'Cádmio', hint: 'Usado em baterias recarregáveis.' },
    { symbol: 'In', number: 49, name: 'Índio', hint: 'Usado em eletrônicos e telas.' },
    { symbol: 'Sn', number: 50, name: 'Estanho', hint: 'Usado em soldas.' },
    { symbol: 'Sb', number: 51, name: 'Antimônio', hint: 'Usado em ligas metálicas.' },
    { symbol: 'Te', number: 52, name: 'Telúrio', hint: 'Usado em semicondutores.' },
    { symbol: 'I', number: 53, name: 'Iodo', hint: 'Usado em medicina e desinfetantes.' },
    { symbol: 'Xe', number: 54, name: 'Xenônio', hint: 'Gás nobre, usado em iluminação.' },
    { symbol: 'Cs', number: 55, name: 'Césio', hint: 'Usado em relógios atômicos.' },
    { symbol: 'Ba', number: 56, name: 'Bário', hint: 'Usado em raios-X.' },
    { symbol: 'La', number: 57, name: 'Lantânio', hint: 'Usado em ligas de alta resistência.' },
    { symbol: 'Ce', number: 58, name: 'Cerócio', hint: 'Usado em catalisadores.' },
    { symbol: 'Pr', number: 59, name: 'Praseodímio', hint: 'Usado em ligas e imãs.' },
    { symbol: 'Nd', number: 60, name: 'Neodímio', hint: 'Usado em imãs superpotentes.' },
    { symbol: 'Pm', number: 61, name: 'Promécio', hint: 'Radioativo, usado em dispositivos de energia.' },
    { symbol: 'Sm', number: 62, name: 'Samário', hint: 'Usado em ímãs.' },
    { symbol: 'Eu', number: 63, name: 'Európio', hint: 'Usado em telas de TV.' },
    { symbol: 'Gd', number: 64, name: 'Gadolínio', hint: 'Usado em contraste para ressonância magnética.' },
    { symbol: 'Tb', number: 65, name: 'Terbínio', hint: 'Usado em ímãs.' },
    { symbol: 'Dy', number: 66, name: 'Disprósio', hint: 'Usado em ímãs de alta resistência.' },
    { symbol: 'Ho', number: 67, name: 'Hólmio', hint: 'Usado em lasers.' },
    { symbol: 'Er', number: 68, name: 'Érbio', hint: 'Usado em lasers e eletrônicos.' },
    { symbol: 'Tm', number: 69, name: 'Térbio', hint: 'Usado em lasers.' },
    { symbol: 'Yb', number: 70, name: 'Itrió', hint: 'Usado em lasers e eletrônicos.' },
    { symbol: 'Lu', number: 71, name: 'Lutécio', hint: 'Usado em lasers.' },
    { symbol: 'Hf', number: 72, name: 'Háfnio', hint: 'Usado em reatores nucleares.' },
    { symbol: 'Ta', number: 73, name: 'Tântalo', hint: 'Usado em componentes eletrônicos.' },
    { symbol: 'W', number: 74, name: 'Tungstênio', hint: 'Usado em lâmpadas.' },
    { symbol: 'Re', number: 75, name: 'Rênio', hint: 'Usado em ligas de alta resistência.' },
    { symbol: 'Os', number: 76, name: 'Ósmio', hint: 'Muito denso, usado em ligas.' },
    { symbol: 'Ir', number: 77, name: 'Irídio', hint: 'Usado em eletrônicos.' },
    { symbol: 'Pt', number: 78, name: 'Platina', hint: 'Usado em joias e eletrônicos.' },
    { symbol: 'Au', number: 79, name: 'Ouro', hint: 'Valioso e usado em joias.' },
    { symbol: 'Hg', number: 80, name: 'Mercúrio', hint: 'Usado em termômetros.' },
    { symbol: 'Tl', number: 81, name: 'Talco', hint: 'Usado em eletrônicos.' },
    { symbol: 'Pb', number: 82, name: 'Chumbo', hint: 'Usado em baterias.' },
    { symbol: 'Bi', number: 83, name: 'Bismuto', hint: 'Usado em medicamentos.' },
    { symbol: 'Po', number: 84, name: 'Polônio', hint: 'Radioativo.' },
    { symbol: 'At', number: 85, name: 'Astato', hint: 'Raro e radioativo.' },
    { symbol: 'Rn', number: 86, name: 'Radônio', hint: 'Gás nobre, radioativo.' },
    { symbol: 'Fr', number: 87, name: 'Francium', hint: 'Extremamente radioativo.' },
    { symbol: 'Ra', number: 88, name: 'Rádio', hint: 'Radioativo, usado em medicina.' },
    { symbol: 'Ac', number: 89, name: 'Actínio', hint: 'Radioativo.' },
    { symbol: 'Th', number: 90, name: 'Tório', hint: 'Radioativo.' },
    { symbol: 'Pa', number: 91, name: 'Protactínio', hint: 'Radioativo.' },
    { symbol: 'U', number: 92, name: 'Urânio', hint: 'Radioativo, usado em energia.' },
    { symbol: 'Np', number: 93, name: 'Néptunio', hint: 'Radioativo.' },
    { symbol: 'Pu', number: 94, name: 'Plutônio', hint: 'Radioativo, usado em armas nucleares.' },
    { symbol: 'Am', number: 95, name: 'Amerício', hint: 'Radioativo, usado em detectores de fumaça.' },
    { symbol: 'Cm', number: 96, name: 'Cúrio', hint: 'Radioativo.' },
    { symbol: 'Bk', number: 97, name: 'Berquelio', hint: 'Radioativo.' },
    { symbol: 'Cf', number: 98, name: 'Califórnio', hint: 'Radioativo.' },
    { symbol: 'Es', number: 99, name: 'Einsteínio', hint: 'Radioativo.' },
    { symbol: 'Fm', number: 100, name: 'Férmio', hint: 'Radioativo.' },
    { symbol: 'Md', number: 101, name: 'Mendelévio', hint: 'Radioativo.' },
    { symbol: 'No', number: 102, name: 'Nobel', hint: 'Radioativo.' },
    { symbol: 'Lr', number: 103, name: 'Lawrêncio', hint: 'Radioativo.' },
    { symbol: 'Rf', number: 104, name: 'Rutherfórdio', hint: 'Radioativo.' },
    { symbol: 'Db', number: 105, name: 'Dúbnio', hint: 'Radioativo.' },
    { symbol: 'Sg', number: 106, name: 'Seabórgio', hint: 'Radioativo.' },
    { symbol: 'Bh', number: 107, name: 'Bóhrio', hint: 'Radioativo.' },
    { symbol: 'Hs', number: 108, name: 'Hássio', hint: 'Radioativo.' },
    { symbol: 'Mt', number: 109, name: 'Meitnério', hint: 'Radioativo.' },
    { symbol: 'Ds', number: 110, name: 'Darmstádtio', hint: 'Radioativo.' },
    { symbol: 'Rg', number: 111, name: 'Roentgênio', hint: 'Radioativo.' },
    { symbol: 'Cn', number: 112, name: 'Copernício', hint: 'Radioativo.' },
    { symbol: 'Nh', number: 113, name: 'Nihônio', hint: 'Radioativo.' },
    { symbol: 'Fl', number: 114, name: 'Fleróvio', hint: 'Radioativo.' },
    { symbol: 'Mc', number: 115, name: 'Moscóvio', hint: 'Radioativo.' },
    { symbol: 'Lv', number: 116, name: 'Livermório', hint: 'Radioativo.' },
    { symbol: 'Ts', number: 117, name: 'Tenessino', hint: 'Radioativo.' },
    { symbol: 'Og', number: 118, name: 'Oganessônio', hint: 'Radioativo.' }
];

// Variáveis globais
let nivelAtual = 0; // Adicionado para controlar o nível
let indiceElemento = 0; // Adicionado para controlar o í
let score = 0;
let elementoAtual = {};
const questionElement = document.getElementById('question');
const hintElement = document.getElementById('hint');
const answerInput = document.getElementById('answerInput');
const feedbackElement = document.getElementById('feedback');
const responderBtn = document.getElementById('responderBtn');
const restartBtn = document.getElementById('restartBtn');
const gameContainer = document.querySelector('.game-container');
const gameOver = document.querySelector('.game-over');

// Função para iniciar o jogo
function iniciarJogo(nivel) {
    nivelAtual = nivel; // Define o nível atual
    score = 0;
    feedbackElement.innerHTML = ''; // Limpar feedback
    gameOver.style.display = 'none';
    gameContainer.style.display = 'block';

    // Se o nível for 1, reinicia o índice dos elementos
    if (nivelAtual === 1) {
        indiceElemento = 0; // Começa do primeiro elemento
        nextElemento(); // Chama o próximo elemento em ordem
    } else {
        nextElemento(); // Para os outros níveis, escolhe aleatoriamente
    }
}

// Função para escolher o próximo elemento
function nextElemento() {
    // Para o nível 1, use o índice atual
    if (nivelAtual === 1) {
        if (indiceElemento >= elementos.length) {
            finalizarJogo(); // Finaliza o jogo se todos os elementos foram usados
            return;
        }
        elementoAtual = elementos[indiceElemento]; // Seleciona o elemento na ordem
        indiceElemento++; // Incrementa o índice para o próximo elemento
    } else {
        const index = Math.floor(Math.random() * elementos.length);
        elementoAtual = elementos[index]; // Para níveis diferentes, seleciona aleatoriamente
    }

    questionElement.innerHTML = `Qual é o nome do elemento com o símbolo "${elementoAtual.symbol}"?`;
    hintElement.innerHTML = elementoAtual.hint;
}

// Função para verificar a resposta do usuário
function verificarResposta() {
    const resposta = answerInput.value.trim();
    if (resposta.toLowerCase() === elementoAtual.name.toLowerCase()) {
        score++;
        feedbackElement.innerHTML = 'Correto! 🎉';
    } else {
        feedbackElement.innerHTML = `Incorreto! O correto é ${elementoAtual.name}.`;
    }
    answerInput.value = '';
    nextElemento();
}

// Função para finalizar o jogo
function finalizarJogo() {
    gameContainer.style.display = 'none';
    gameOver.style.display = 'block';
    document.getElementById('finalScore').innerHTML = `Sua pontuação final é ${score}.`;
}

// Adicionando eventos aos botões
document.getElementById('fase1').addEventListener('click', () => {
    gameContainer.style.display = 'none'; // Esconde a tela inicial
    iniciarJogo(1); // Inicia o jogo no nível 1
});
document.getElementById('fase2').addEventListener('click', () => {
    gameContainer.style.display = 'none'; // Esconde a tela inicial
    iniciarJogo(2); // Inicia o jogo no nível 2
});
document.getElementById('fase3').addEventListener('click', () => {
    gameContainer.style.display = 'none'; // Esconde a tela inicial
    iniciarJogo(3); // Inicia o jogo no nível 3
});

responderBtn.addEventListener('click', verificarResposta);
restartBtn.addEventListener('click', iniciarJogo);