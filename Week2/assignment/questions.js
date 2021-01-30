const myQuiz = [
    {question: 'A group of crows is called a _____ of crows..', answer: 'murder'},
    {question: 'True or false, baby whales gain 200 pounds a day.', answer: 'true'},
    {question: 'What animal is the fastest of all land animals?', answer: 'cheetah'},
];

const.randomQuestion = question.random();

const firstQuestion = prompt(myQuiz[0].question);
const firstAnswer = myQuiz[0].answer
if(firstQuestion == firstAnswer) {
    alert('you are right!');
} else {
    alert('that is incorrect' + ', the correct answer is a murder of crows');
}

const secondQuestion = prompt(myQuiz[1].question);
const secondAnswer = myQuiz[1].answer
if(secondQuestion == secondAnswer) {
    alert('you are right!');
} else {
    alert('that is incorrect' + ', this is true!');
}

const thirdQuestion = prompt(myQuiz[2].question);
const thirdAnswer = myQuiz[2].answer
if(thirdQuestion == thirdAnswer) {
    alert('you are right!');
} else {
    alert('that is incorrect' + ', the correct answer is the cheetah');
}

