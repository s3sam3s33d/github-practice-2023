const question = "What is the capital of France?";
const correctAnswer = "Paris";
const userAnswer = prompt(question);
const isCorrect = userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase();
const resultMessage = isCorrect
  ? `Congratulations! "${userAnswer}" is correct. 🎉`
  : `Oops! "${userAnswer}" is incorrect. The correct answer is "${correctAnswer}".`;
console.log(resultMessage);
