const input = prompt("What is 5+5? \n");
const wrong = "wrong";
const correct = "correct";

const inputFunc = (a) => a == 10;

(inputFunc(input)) ? console.log(`You are "${correct}"`): console.log(`You are "${wrong}"`);
