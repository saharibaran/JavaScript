
let numberCandidate
let numberVoters
let nameCandidate
let candidate_object
let name_vote_candid
let votes
let candid_list=[]
let empty=0
let final_list=[]

numberCandidate=prompt("enter number of CANDIDATE")
for (let i=1;i<=numberCandidate;i++){
    nameCandidate=prompt("Enter name of condidates ",i)

    candidate_object={
        name:nameCandidate,
        votes:0,
    }
    candid_list.push(candidate_object)
}

// for (let items=0;items<candid_list.length;items++){
//     console.log(candid_list[items])
// }
numberVoters=prompt("Enter number of VOTERS")

for (let i=1;i<=numberVoters;i++) {
    name_vote_candid = prompt("Enter name of candid that you choose")
    for (let k=0;k<candid_list.length;k++)
        if (candid_list[k].name==name_vote_candid) {
            candid_list[k].votes++
        }
        if (name_vote_candid == '') {
                    empty++
                }
}



candid_list.sort(function (x,y){
    return x-y
})
console.log("The winner is "+candid_list[0].name +" with "+candid_list[0].votes+" votes.")
console.log("results:")
for (let i=0;i<candid_list.length;i++) {
    console.log(candid_list[i].name + ':' + candid_list[i].votes)
}



