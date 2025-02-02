// let eleme=document.getElementsByClassName("heading1");
// console.log(eleme);
// console.dir(eleme);
// let parag=document.querySelector(".content1");
// console.log(parag);

// let string=document.querySelector("h2");
// console.dir(string.innerText);
// string.innerText=string.innerText+" Swami";

// let divs=document.querySelectorAll("div");
// let i=1;
// for(div of divs){
//     div.innerText=`div${i}`;
//     i++;
// }
let button=document.createElement("button");
button.innerText="click here!"
button.style.color="white";
button.style.backgroundColor="red";
document.querySelector("body").prepend(button);
let cl=document.querySelector("p");
cl.classList.add("new");
