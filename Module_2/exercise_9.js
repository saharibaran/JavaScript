


const firstArray=[4,5,8,13,16,11,3,1,19,22,65];
let evenArray=[];


function even(firstArray){
    for (let i=0;i<firstArray.length;i++){
        if (firstArray[i] % 2 ==0 ){
            evenArray.push(firstArray[i]);

        }
    }
    return evenArray;
}


evenNumbers=even(firstArray);
console.log("FirstArray")
for (let i =0;i<firstArray.length;i++){
    console.log(firstArray[i]);
}
console.log("EvenArray")
for (let i =0;i<evenNumbers.length;i++){
    console.log(evenArray[i]);
}

