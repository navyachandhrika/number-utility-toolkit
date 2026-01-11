const output = document.getElementById('output');
const historyList = document.getElementById('historyList');

function addHistory(text) {
  const li = document.createElement('li');
  li.textContent = text;
  historyList.prepend(li); // latest on top
}

function getNumber() {
  return Number(document.getElementById('numInput').value);
}

// Prime
function checkPrime() {
  const num = getNumber();
  if (num <= 1) {
    output.textContent = `${num} is NOT prime.`;
    addHistory(`${num} → NOT prime`);
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      output.textContent = `${num} is NOT prime.`;
      addHistory(`${num} → NOT prime`);
      return;
    }
  }
  output.textContent = `${num} is prime!`;
  addHistory(`${num} → prime`);
}

// Palindrome
function checkPalindrome() {
  const num = getNumber();
  const str = num.toString();
  const reversed = str.split('').reverse().join('');
  const result = num === Number(reversed) ? "Palindrome" : "Not Palindrome";
  output.textContent = `Result: ${result}`;
  addHistory(`${num} → ${result}`);
}

// Reverse
function reverseNumber() {
  const num = getNumber();
  const reversed = Number(num.toString().split('').reverse().join(''));
  output.textContent = `Reversed: ${reversed}`;
  addHistory(`${num} → Reversed: ${reversed}`);
}

// Armstrong
function checkArmstrong() {
  const num = getNumber();
  const str = num.toString();
  let sum = 0;
  for (let digit of str) sum += Math.pow(Number(digit), str.length);
  const result = sum === num ? "Armstrong" : "Not Armstrong";
  output.textContent = `Result: ${result}`;
  addHistory(`${num} → ${result}`);
}

// Digit sum
function digitSum() {
  const num = getNumber();
  const sum = num.toString().split('').reduce((acc, d) => acc + Number(d), 0);
  output.textContent = `Digit Sum: ${sum}`;
  addHistory(`${num} → Digit Sum: ${sum}`);
}

// Factorial
function factorial() {
  const num = getNumber();
  if (num < 0) {
    output.textContent = "Factorial not defined for negative numbers.";
    addHistory(`${num} → Factorial undefined`);
    return;
  }
  let fact = 1;
  for (let i = 2; i <= num; i++) fact *= i;
  output.textContent = `Factorial: ${fact}`;
  addHistory(`${num} → Factorial: ${fact}`);
}

// Fibonacci
function fibonacci() {
  const num = getNumber();
  let a = 0, b = 1;
  let series = [a];
  for (let i = 1; i < num; i++) {
    series.push(b);
    [a, b] = [b, a + b];
  }
  output.textContent = `Fibonacci: ${series.join(', ')}`;
  addHistory(`${num} → Fibonacci: ${series.join(', ')}`);
}
