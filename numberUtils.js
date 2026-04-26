function isEven(num) {
  return num % 2 === 0;
}

function countGreaterThanTen(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      count++;
    }
  }

  return count;
}

function contains(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(isEven(4));
console.log(countGreaterThanTen([5, 12, 18]));
console.log(contains([1, 2, 3], 2));
