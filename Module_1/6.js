const answer = confirm('should I calculate the square root? ');
let root;
if (answer == true){
  let sqrOfNum = parseFloat(prompt('Enter a number: '));
    if (sqrOfNum < 0){
      document.querySelector('#target').innerHTML = 'The square root is not defined, type a number greater than zero.'
    } else if (sqrOfNum >= 0) {
      root = sqrOfNum ** (1/2);
      document.querySelector('#target').innerHTML = `The square root of ${sqrOfNum} is ${root}`
    }
} else {
  document.querySelector('#target').innerHTML = 'The square roo is not calculated.'
}