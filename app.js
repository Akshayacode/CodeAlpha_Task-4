const flashcards = [
    {
        word: "Hello",
        translation: "Hola",
        pronunciation: "ho-la"
    },
    {
        word: "Thank You",
        translation: "Gracias",
        pronunciation: "gra-see-as"
    },
    {
        word: "Good Morning",
        translation: "Buenos Días",
        pronunciation: "bway-nos dee-as"
    },
    {
        word: "How Are You?",
        translation: "¿Cómo estás?",
        pronunciation: "ko-mo es-tas"
    }
];

let currentCard = 0;
let score = Number(localStorage.getItem("quizScore")) || 0;

document.getElementById("score").textContent = score;

function loadCard() {
    document.getElementById("flashcard").innerHTML =
        flashcards[currentCard].word;
}

function showAnswer() {

    const card = flashcards[currentCard];

    document.getElementById("flashcard").innerHTML =
    `
    <div>
        <strong>${card.translation}</strong>
    </div>
    <div>
        Pronunciation: ${card.pronunciation}
    </div>
    `;
}

function nextCard() {

    currentCard++;

    if(currentCard >= flashcards.length){
        currentCard = 0;
    }

    loadCard();
    loadQuestion();
}

function loadQuestion() {

    document.getElementById("question").textContent =
        `Translate: ${flashcards[currentCard].word}`;
}

function checkAnswer() {

    const userAnswer =
        document.getElementById("answer").value.trim().toLowerCase();

    const correctAnswer =
        flashcards[currentCard].translation.toLowerCase();

    if(userAnswer === correctAnswer){
        score++;
        localStorage.setItem("quizScore", score);
    }

    document.getElementById("score").textContent = score;

    document.getElementById("answer").value = "";

    nextCard();
}

loadCard();
loadQuestion();