// const account={

//     user:"Aditya",
//     posts:1,
//     follwers:249,
//     following:372,
//     isfollow:true
// };

// let num=10;
// if(num%2===0){
//     console.log(num,"is even");
// }
// else{
//     console.log(num, "is odd");
// }


// alert("Shri!");

// let number=prompt("Enter number");
// if(number%5==0){
//     console.log(number,"is divisible by 5");
// }
// else{
//     console.log(number,"isn't divisible by 5");
// }

// let size=0;
// let string="Shri.";
// for(let i of string){
//     size++;
// }
// console.log(size);




// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let number=10;
// let usernumber=prompt("Enter number");

// while(usernumber!=number){
//     usernumber=prompt("Enter number");
// }






// let name=prompt("Enter your full name");
// let nameL=name.toLowerCase();
// let username="@"+nameL+nameL.length;
// console.log(username);
// let marks=[85,97,44,37,76,60];
// let total=0;
// for(let el of marks){
//     total+=el;
// }
// let average=total/marks.length;
// console.log(average);
// let numbers=[250,645,300,900,50];
// for(let i=0;i<numbers.length;i++){
//     numbers[i]=numbers[i]-((numbers[i]*10)/100);
// }


// let i=0;
// for(let number of numbers){
//     console.log(`the number at ${i} is ${number}`);
//     numbers[i]=number-((number*10)/100);
//     i++;
// }
// console.log(numbers);



// let companies=["Boomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// // companies.shift();
// companies.splice(0,1);
// console.log(companies);
// companies.splice(1,1,"Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);







// function sum (a,b){
//     return a+b;
// }

// let add=sum(10,38);
// console.log(add);




// let add=(a,p)=>{
//     return a+p;
// }
// console.log(add(10,38));




// let total=0;
// function vowels(strings){
//     strings=strings.toLowerCase();
//     for(let i of strings){
//         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
//             total++;
//         }
//     }
//     return total;
// }
// let t=vowels("Shrisaii");
// console.log(t);




// let string="Aditya";
// for(let i in string){
//     console.log(i);
// }
// let total=0;
// let t=(string)=>{
//     string=string.toLowerCase();
//     for(let i of string){
//         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
//             total++;
//         }
//     }
//     return total;
// }

// console.log(t("Elephanta"));



// let array=[1,2,3,4,5];

// array.forEach(function printValue(value){
//     console.log(value);
// })
// array.forEach((value,i,array)=>{
//     console.log(value,i,array);
// })
// let array=[1,2,3,4,5];
// array.forEach(element => {
//     console.log(element*element);
// });

// let array=[1,2,3,4,5];
// let newArray=array.map((value) =>{
//     return value;
// })
// let newArray=array.map(function newArrays(value){
//     return value;
// })
// console.log(newArray);

// let array=[1,2,3,4,5];

// let newArray=array.filter((val)=>{
//     return val%2==0;
// })

// console.log(newArray);


// let array=[1,2,3,4,5];

// let add=array.reduce((previous,current)=>{
//     return previous+current;
// })

// let newAdd=array.reduce(function add(previous,current){
//     return previous+current;
// })

// console.log(newAdd);





// let array=[1,2,3,4,5];
// let maximums=array.reduce((previous,current)=>{
//     if(previous>current){
//         return previous;
//     }
//     return current;
// })
// console.log(maximums);
// let marks=[100,72,74,76,95];
// let newMarks=marks.filter((value)=>{
//     return value>90;
// })
// console.log(newMarks);

let array=[];
let n=prompt("Enter number");

    for(let i=1;i<=n;i++){
        array[i-1]=i;
    }

console.log(array);


let add=array.reduce((previous,current)=>{
    return previous+current;
})


console.log(add);

let mul=array.reduce((previous,current)=>{
    return previous*current;
})

console.log(mul);