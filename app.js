const quizData = [
    {
        question: "que lenguaje de programacion corre dentro del navegador?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScrit",
        correct: "d",
    },
    {
        question: "Para que sirve Css?",
        a: "Para dar colores a una pagina",
        b: "Para dar estilos a un sitio web",
        c: "Para crear programas",
        d: "Para mover elementos",
        correct: "b",
    },
    {
        question: "Que significa HTML?",
        a: "Hypertext Markup Lenguage",
        b: "Hypertext Mark Lenguage",
        c: "Lenguaje de Hypertexto",
        d: "Helicopteros Temibles Muy Locos",
        correct: "a",
    },
    {
        question: "Que significa SPA?",
        a: "Senior Pan Aperitive",
        b: "Single Page Application",
        c: "Single Prototipe Aplication",
        d: "Single Page Aperitive",
        correct: "b",
    },
]; 
const quiz = document.getElementById("quiz");  
const answerElements = document.querySelectorAll(".answer");  
const questionElement = document.getElementById("question");  
const a_text = document.getElementById("a_text");  
const b_text = document.getElementById("b_text");  
const c_text = document.getElementById("c_text");  
const d_text = document.getElementById("d_text");  
const submitButton = document.getElementById("submit");  
let currentQuiz = 0;  
let score = 0;  
const deselectAnswers = () => {  
 answerElements.forEach((answer) => (answer.checked = false));  
};  
const getSelected = () => {  
 let answer;  
 answerElements.forEach((answerElement) => {  
  if (answerElement.checked) answer = answerElement.id;  
 });  
 return answer;  
};  
const loadQuiz = () => {  
 deselectAnswers();  
 const currentQuizData = quizData[currentQuiz];  
 questionElement.innerText = currentQuizData.question;  
 a_text.innerText = currentQuizData.a;  
 b_text.innerText = currentQuizData.b;  
 c_text.innerText = currentQuizData.c;  
 d_text.innerText = currentQuizData.d;  
};  
loadQuiz();  
submitButton.addEventListener("click", () => {  
 const answer = getSelected();  
 if (answer) {  
  if (answer === quizData[currentQuiz].correct) score++;  
  currentQuiz++;  
  if (currentQuiz < quizData.length) loadQuiz();  
  else {  
   quiz.innerHTML = `  
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
      <button onclick="history.go(0)">Play Again</button>  
    ` // location.reload() won't work in CodePen for security reasons;  
  }  
 }  
});  