const questions = [
    {
        question: "Qual é a principal função de um atuador em um robô?",
        options: ["Processar informações", "Movimentar as partes do robô", "Captar dados sensoriais", "Armazenar energia"],
        answer: "Movimentar as partes do robô",
        image: "img/atuador.jpg",
    },
    {
        question: "Qual destes sensores é comumente usado para medir a distância em robôs móveis?",
        options: ["Sensor de temperatura", "Sensor de pressão", "Sensor ultrassônico", "Sensor de proximidade"],
        answer: "Sensor ultrassônico",
        image:  "img/sensor.jpg",
    },
    {
        question: "O que é a inteligência artificial (IA) em robótica?",
        options: ["A capacidade de um robô realizar tarefas simples de forma automatizada", "A habilidade de um robô simular ações humanas por meio de programação", "A capacidade de um robô processar dados e tomar decisões autônomas", "A capacidade de um robô coletar dados sobre o ambiente externo"],
        answer: "A capacidade de um robô processar dados e tomar decisões autônomas",
    },
    {
        question: "Qual é o nome do robô humanoide desenvolvido pela Honda?",
        options: ["ASIMO", "R2-D2", "Atlas", "Pepper"],
        answer: "ASIMO",
    },
    {
        question: "Em que área da robótica o ROS (Robot Operating System) é utilizado?",
        options: ["Para criação de interfaces de usuário", "Para controle de sistemas operacionais em dispositivos móveis", "Como sistema operacional de robôs, facilitando a programação e controle", "Como plataforma de desenvolvimento de jogos de realidade aumentada"],
        answer: "Como sistema operacional de robôs, facilitando a programação e controle",
    },
    {
        question: "Qual dos seguintes componentes é responsável pela visão em robôs autônomos?",
        options: ["LIDAR", "Servo motores", "Sensores de toque", "Atuadores"],
        answer: "LIDAR",
    },
    {
        question: "O que significa a sigla AI em robótica?",
        options: ["Artificial Interference", "Artificial Intelligence", "Automated Interface", "Automatic Intelligence"],
        answer: "Artificial Intelligence",
    },
    {
        question: "Qual é a função de um end-effector em um robô industrial?",
        options: ["Movimentar o robô de um ponto a outro", "Realizar a operação final, como pegar ou soltar objetos", "Carregar e armazenar energia", "Controlar a velocidade de movimentação"],
        answer: "Realizar a operação final, como pegar ou soltar objetos",
    },
    {
        question: "Qual das alternativas descreve um exemplo de robô colaborativo?",
        options: ["Um robô autônomo que realiza tarefas de busca e resgate", "Um robô de montagem que trabalha ao lado de seres humanos, realizando tarefas simples", "Um robô que fabrica outros robôs", "Um robô projetado para explorar planetas"],
        answer: "Um robô de montagem que trabalha ao lado de seres humanos, realizando tarefas simples",
    },
    {
        question: "O que significa a sigla CPU?",
        options: ["Central Processing Unit", "Central Power Unit", "Central Print Unit", "Central Performance Unit"],
        answer: "Central Processing Unit",
    },
    {
        question: "Qual a principal função do LIDAR em robôs móveis?",
        options: ["Medir a pressão no ambiente", "Obter imagens 3D do ambiente", "Medir a temperatura ao redor do robô", "Identificar obstáculos usando luz infravermelha"],
        answer: "Identificar obstáculos usando luz infravermelha",
    },
    {
        question: "Qual dos seguintes sistemas operacionais é desenvolvido pela Microsoft?",
        options: ["Linux", "macOS", "Windows", "Androidi"],  // Corrigido "Androidi" para "Android"
        answer: "Windows",
    },
    {
        question: 'Qual é a função principal da memória RAM em um computador?',
        options: ["Armazenar arquivos permanentemente", "Processar gráficos em jogos", "Armazenar dados temporários enquanto o computador está ligado", "Proteger o computador contra vírus"],
        answer: "Armazenar dados temporários enquanto o computador está ligado",
    },
 {
        question: 'Qual é a função do sistema operacional em um computador?',
        options: ["Realizar cálculos matemáticos", "Proteger contra vírus", "Gerenciar hardware e software", "Aumentar a velocidade do processador"],
        answer: " Gerenciar hardware e software",
    },
 {
        question: 'O que é a "nuvem" (cloud computing) no contexto de tecnologia? ',
        options: ["Um tipo de vírus", "Armazenamento e processamento de dados pela internet", "Um tipo de dispositivo de entrada", " Uma tecnologia de criptografia de dados"],
        answer: " Armazenamento e processamento de dados pela internet",
    },
 {
        question: 'Qual das alternativas é um exemplo de um navegador de internet?',
        options: ["Photoshop", "Google Chrome", "Excel", "Word"],
        answer: " Google Chrome",
    },
 {
        question: 'Qual comando no Windows serve para abrir o "Prompt de Comando"?',
        options: ["Win + D", "Win + R", "Win + E", " Win + P"],
        answer: "Win + R",
    },
{
        question: 'O que é um arquivo .zip? ',
        options: [" Um tipo de vírus de computador", " Um arquivo compactado", " Um arquivo de imagem", "  Um tipo de software antivírus"],
        answer: " Um arquivo compactado",
    },

{
        question: 'Qual dos seguintes é um tipo de conexão de rede sem fio?',
        options: ["HDMI", "Bluetooth", "Ethernet", " USB"],
        answer: "Bluetooth",
    },

    {
        question: 'O que é um "IP" em redes de computadores?',
        options: ["Internet Protocol", "Intelligent Processor", "Internal Point", "Internet Provider"],  // Corrigido para fechar a string corretamente
        answer: "Internet Protocol",
    }
];

let currentQuestionIndex = 0;
let score = 0;  // Corrigido para começar com 0 de pontuação
let timer;
let timeLeft = 15;
const maxQuestions = 20;

const usernameInput = document.getElementById('username');
const startButton = document.getElementById('startButton');
const quizScreen = document.getElementById('quizScreen');
const questionTitle = document.getElementById('questionTitle');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const timerDisplay = document.getElementById('timeLeft');
const nextButton = document.getElementById('nextButton');
const resultScreen = document.getElementById('resultScreen');
const finalScoreDisplay = document.getElementById('finalScore');
const userNameDisplay = document.getElementById('userNameDisplay');
const userNameDisplayResult = document.getElementById('userNameDisplayResult');
const restartButton = document.getElementById('restartButton');
const questionImage = document.getElementById('questionImage');
const currentScoreDisplay = document.getElementById('currentScore');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', loadNextQuestion);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    document.getElementById('welcomeScreen').classList.add('hidden');
    quizScreen.classList.remove('hidden');
    userNameDisplay.textContent = username;
    userNameDisplayResult.textContent = username;
    score = 0; // Corrigido para começar com 0
    currentQuestionIndex = 0;
    loadNextQuestion();
}

function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = `Pergunta ${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    timeLeft = 15; // Tempo reiniciado
    timerDisplay.textContent = timeLeft;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer(null); // Se o tempo esgotar, passa a questão sem resposta
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score += 10 + timeLeft; // Calcula pontos com base no tempo restante
    }
    currentScoreDisplay.textContent = score;
    nextButton.classList.remove('hidden');
    currentQuestionIndex++;
}

function endQuiz() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
    usernameInput.value = '';
    currentScoreDisplay.textContent = 0;
}
