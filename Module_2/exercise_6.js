

let randNum_list=[];
let randNum=0;
function randomFunction (){
    return Math.floor(Math.random()*6)+1;
}

while (randNum != 6){
    randNum=randomFunction();
    randNum_list.push(randNum);
}

document.write("<ul>");
for (let i =0;i<randNum_list.length;i++){
    document.write("<li>" + randNum_list[i]+ "</li>");
}
document.write("<ul>");