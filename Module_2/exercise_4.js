

const numList=[]
let sortList
var number=parseInt(prompt("enter number,if you want to finish enter *ZERO*:"));
while ( number != 0){
    numList.push(number);
    number=parseInt(prompt("enter number,if you want to finish enter *ZERO*:"))
}
for (let i=0;i<numList.length;i++){
    sortList=numList.sort(function (x,y){
        return x-y
    })
}
for (let i=0;i<sortList.length;i++){
    console.log(sortList[i])
}