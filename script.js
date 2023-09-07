const question = "Complete the blank: To Kill a ___________";
const correctAnswer = "MOCKINGBIRD";
const userAnswer = prompt(question);
const userAnswerUpperCase = (userAnswer) => userAnswer.toUpperCase();
const result = userAnswerUpperCase == correctAnswer ? `${userAnswer} is correct!` : `${userAnswer} is incorrect.`;
console.log(result);
