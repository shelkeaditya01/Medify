let bu1=document.querySelector("#b1");
bu1.addEventListener("click",(evt)=>{
        console.log("bu clicked");
        console.log(evt);
        console.log(evt.type);
        console.log(evt.clientX);
});

let fun1=()=>{
    console.log("Bu clicked two function");
}
bu1.addEventListener("click",fun1);

bu1.removeEventListener("click",fun1);

let bu2=document.querySelector("#b2");
bu2.addEventListener("dblclick",()=>{
    console.log("bu clicked two times");
});

let box1=document.querySelector("#box1");
let body=document.querySelector("body");
let mode="light";
box1.addEventListener("mouseover",()=>{
    if(mode=="dark"){
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    else{
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
});


// let togglebu=document.querySelector("#toggle");

// togglebu.addEventListener("click",()=>{
//     if(mode=="light"){
//         mode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         mode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
    
// });
// let body=document.querySelector("body");
// let mode="light";
// togglebu.addEventListener("click",()=>{
//     if(mode=="light"){
//         mode="dark";
//         body.classList.remove("light");
//         body.classList.add("dark");
//     }
//     else{
//         mode="light";
//         body.classList.remove("dark");
//         body.classList.add("light");
//     }
//     console.log(mode);
// });

