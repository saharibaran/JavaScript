const numDice = +prompt("Enter the number of dice: ")
const eyesNumbers = +prompt("Enter the sum of the eyes: ")

let odds = 0;

for (let i = 0; i <= 10000; i++) {
  let roll = 0
  for (let dice = 1; dice <= numDice ; dice++) {
    roll += Math.floor(Math.random()* 6+ 1)
    if (roll == eyesNumbers) {

                odds ++

        }
    }
}
probability = (odds/10000)*100
console.log(probability)