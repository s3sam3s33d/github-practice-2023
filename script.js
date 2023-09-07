const question = "What is the color of the sky?\n";
const correctAnswer = "blue";
const userAnswer = prompt(question);
const check = userAnswer && userAnswer.toLowerCase() === correctAnswer;
const resultMessage = check
?`Congratulations! "${userAnswer}" is correct.`
:`Oops! "${userAnswer}" is incorrect. The correct answer is "${correctAnswer}".`;
console.log(resultMessage);