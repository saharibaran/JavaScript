

let randNum_list=[];
let randNum=0;
let rollSide

function randomFunction (rollSide){
    return Math.floor(Math.random()*rollSide)+1;
}

rollSide=prompt("Enter number of sides")
while (randNum != rollSide){
    randNum=randomFunction(rollSide);
    randNum_list.push(randNum);
}

document.write("<ul>");
for (let i =0;i<randNum_list.length;i++){
    document.write("<li>" + randNum_list[i]+ "</li>");
}
document.write("<ul>");