// Questions and Answers
const quizData = [
    {
        question: `What was the name of the crime boss who was head of the feared Chicago Outfit?`,
        answer: `Al Capone`,
    },
    {
        question: `The line "To be or not to be" comes from which Shakespeare play?`,
        answer: `Hamlet`,
    },
    {
        question: `Which South American country has the capital city of Quito?`,
        answer: `Ecuador`,
    },
    {
        question: `Which musician is the godmother to Elton John's sons?`,
        answer: `Lady Gaga`,
    },
    {
        question: `Who was the first woman to fly solo across the Atlantic Ocean?`,
        answer: `Amelia Earhart`, 
    },
    {
        question: ` If you tipped 20% on a $15 bill, how much would the tip be?`,
        answer: `$3.00`,
    },
    {
        question: `Who painted the Mona Lisa?`,
        answer: `Leonardo da Vinci`,
    },
    {
        question: `How many time-zones are there in Russia`,
        answer: `11`,
    },
    {
        question: `What is your body's largest organ?`,
        answer: `The Skin`,
    },
    {
        question: `How long is an Olympic swimming pool (in meters)?`,
        answer: `50 Meters`,
    },

]

// Applying Buttons and P Elements into Variables
const questionButton = document.getElementById("question__bttn");
const questionDisplay = document.getElementById("question__txt");
const answerButton = document.getElementById("answer__bttn");
const answerDisplay = document.getElementById("answer__txt");

//Variables to store the current question and answer
let currentQuestion = ``;
let currentAnswer = ``;

// Function to generate random question and answer
function getRandomQuestionAndAnswer (){
    const randomIndex = Math.floor(Math.random() * quizData.length);
    return quizData[randomIndex];
}

//Function to update the current question and Answer
function updateCurrentQuestionAndAnswer() {
    const {question, answer} = getRandomQuestionAndAnswer();
    currentQuestion = question;
    currentAnswer = answer;
}

// Setting up an Event Listener for the Random Question Button.
questionButton.addEventListener("click", function() {
    updateCurrentQuestionAndAnswer();
    questionDisplay.textContent = currentQuestion;
    answerDisplay.textContent = ``;
});

// Setting up an Event Listener for the Answer Button.
answerButton.addEventListener("click", function(){
    answerDisplay.textContent = currentAnswer;
});

// Initial Set-up
updateCurrentQuestionAndAnswer();
questionDisplay.textContent = currentQuestion;