

let numberList=[];
let sortlist_5;
let number =prompt("enter number, for being finish program enter repeated number");

while (!numberList.includes(number)){
    numberList.push(number);
    number =prompt("enter number, for being finish program enter repeated number");

}

sortlist_5=numberList.sort(function (x,y){return x-y})

for (let i = 0; i < sortlist_5.length; i++) {
    console.log(sortlist_5[i]);
}



