

const nameDog=[];
let name;
let reverse_list;

for (let i=0;i<6;i++){
    name=prompt("Enter name of Dogs");
    nameDog.push(name);
}
reverse_list=nameDog.sort().reverse()

document.write("<ul>")
for (let i=0;i<reverse_list.length;i++){
    document.write("<li>" +reverse_list[i]+ "</li>")
}
document.write("<ul>")