let starYear = parseInt(prompt("Enter start year: "));
let endYear = parseInt(prompt("Enter end year: "));

for(starYear; starYear >= endYear; starYear++){
  if (starYear % 400 === 0 || (starYear %4 === 0 && starYearm % 100 != 0)){
    const ul = document.querySelector(".list_leap_year");
    const li = document.querySelector('li')
    li.appendChild(document.createTextNode(starYear));
    ul.appendChild(li)
  }
}