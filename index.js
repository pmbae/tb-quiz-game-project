var countDownTimer;
var timerInterval;
var arrayofQuestions = [];
const maxTime = 5 * 60; //time in seconds
function setcountDownTimer() {
    countDownTimer = maxTime;
    console.log("countDownTimer: ", countDownTimer);
        }

//when begin is clicked, timer starts
//start time
function startTimer (){
    timerInterval = setInterval(updateTimer, 1000);
    console.log("StartTimer: ", timerInterval);

}

function updateTimer() {
    console.log("UpdateTime: Begun")
    countDownTimer--;
    presentTimer();

}


function presentTimer() {
    let currentTime = document.getElementById("timer");
    currentTime.innerText = countDownTimer;
    console.log("PresentTimer: currentTime: ", currentTime)

}

function showScoreBoard (){
    let scoreBoard = document.getElementById("score-board");
    //scoreBoard.classList.toggle("hide", false);
    scoreBoard.classList.remove("hide");
}
function presentScore () {

}

function hideGreeting() {
    let greeting = document.getElementById("greeting");
    //scoreBoard.classList.toggle("hide", false);
    console.log("hideGreeting: greeting", greeting);
    greeting.classList.add("hide");
}


// question is asked
function SetupQuestions() {
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class",
        answer1: "Write a semicolon (;) character, followed",
        answer2: "Write a semicolon (;) character, followed",
        answer3: "Write a semicolon (;) character, followed",
        answer4: "Write a semicolon (;) character, followed",
        correctAnswer: 2     
    };
    let question2 = {
        id: "quest1",
        question: "To select elements with a specific class",
        answer1: "Write a semicolon (;) character, followed",
        answer2: "Write a semicolon (;) character, followed",
        answer3: "Write a semicolon (;) character, followed",
        answer4: "Write a semicolon (;) character, followed",
        correctAnswer: 3  
    };

    arrayofQuestions.push(question1);
    arrayofQuestions.push(question2);
    console.log("SetupQuestions arrayofQuestions: ", arrayofQuestions);


}
function getQuestion(questionId){
    console.log('getQuestion questionId', questionId);
    let found = false;




    for(let i=0; i<arrayofQuestions.length; i++) {
        if(questionId == arrayofQuestions[i].id) {
            prepareQuestionAndAnswer(i);
        }

    }
}

function prepareQuestionAndAnswer(questionIndex) {
    let questionSection = document.getElementById('questions');
    let newQuestion = document.createElement('div');
    newQuestion.id = arrayofQuestions[questionIndex].id;
    newQuestion.innerText=arrayofQuestions[questionIndex].question;
    newQuestion.classList.add('question');

    let qspan = document.createElement('span');
    qspan.innerText = arrayofQuestions[questionIndex].question;
    newQuestion.appendChild(qspan)
    


    if (arrayofQuestions[questionIndex].answer1) {
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');

        rdoBtn.id = `${arrayofQuestions[questionIndex].id}_answer1`;
        rdoBtn.setAttribute('type', 'radio');
        rdoBtn.value = 1
        rdoBtn.classList.add('answer');
        rdoBtn.classList
        answer.innerText= arrayofQuestions[questionIndex].answer1;
        answer.classList.add('answer');
        answer.id = `${arrayofQuestions[questionIndex].id}_answer1`;
        newQuestion.appendChild(answer);
    }

    if (arrayofQuestions[questionIndex].answer2) {
        let answer = document.createElement('div');
        answer.innerText = arrayofQuestions[questionIndex].answer2;
        answer.classList.add('answer');
        answer.id = `${arrayofQuestions[questionIndex].id}_answer2`;
        newQuestion.appendChild(answer);
        
    }

    questionSection.appendChild(newQuestion);
}

        //if  question is correct, next question
        //if question is incorrect time penalty
        //if question is correct show points and then go to next question
function doGame() {
    setcountDownTimer();
    startTimer();
    hideGreeting();
    showScoreBoard();
    getQuestion('quest0');
}
        