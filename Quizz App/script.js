const questions = [
    {
        question: " which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Girrafe",correct:false},
        ]
    },
    {
        question: " which is the longest river in the world?",
        answers:[
            {text:"Amazon",correct:false},
            {text:"Nile",correct:true},
            {text:"Ganga",correct:false},
            {text:"Thames",correct:false},
        ]

    },
    {
        question: " who is the first PM of India?",
        answers:[
            {text:"Netaji",correct:false},
            {text:"Bapuji",correct:false},
            {text:"Nehruji",correct:true},
            {text:"Ramji",correct:false},
        ]

    },
    {
        question: " Most Rainy place in India?",
        answers:[
            {text:"shivamogga",correct:false},
            {text:"Bangalore",correct:false},
            {text:"Agumbe",correct:false},
            {text:"Chirapunji",correct:true},
        ]

    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }
 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })

 startQuiz();


