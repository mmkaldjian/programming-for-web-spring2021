const myQuiz = [
    {question: 'A group of crows is called a _____ of crows..', answer: 'murder'},
    {question: 'True or false, baby whales gain 200 pounds a day.', answer: 'true'},
    {question: 'What animal is the fastest of all land animals?', answer: 'cheetah'},
];

const randomQuestion = Math.round(Math.random() * (myQuiz.length - 1));
console.log(randomQuestion);

const userAnswer = window.prompt(myQuiz[randomQuestion].question);
console.log(userAnswer);

window.alert('You answered ' + userAnswer + '. The correct answer was ' + myQuiz[randomQuestion].answer + '!');

