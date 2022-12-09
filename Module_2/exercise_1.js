


var numList=[]
var reverseList=[]



for (let i=0;i<5;i++){
    let num=prompt("Enter 5 number");
    numList.push(num);

}
for (let i=numList.length;i>=0;i--){
    reverseList.push(numList[i])
}
for (let i =0;i<reverseList.length;i++){
    console.log(reverseList[i])
}