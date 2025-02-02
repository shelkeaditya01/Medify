// function getData(id,getNextData){
//     setTimeout(()=>{
//         console.log("data",id);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }

// getData(1,()=>{
//     console.log("getting data2");
//     getData(2);
// })



// let promise1=new Promise((resolve,reject)=>{
//     console.log("I am a promise1");
//     resolve("Success");
// })

// let promise2=new Promise((resolve,reject)=>{
//     console.log("I am a promise1");
//     reject("Error occured");
// })



// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
//     })
// }

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled",res);
// })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })



// function asyncFunction(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data1");
//             resolve("Success");
//         },4000)
//     })
// }

// console.log("Fetching Data.....");
// let p1=asyncFunction();
// p1.then((res)=>{
//     console.log(res)
// })

// function asyncFunction(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data2");
//         reject("Failed");
//         },4000)
//     })
// }

// console.log("Fetching Data.....");
// p1=asyncFunction();
// p1.catch((err)=>{
//     console.log(err);
// })



// function asyncFunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data1");
//             resolve("Success");
//         },4000)
//     })
// }

// function asyncFunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data2");
//             resolve("Success");
//         },4000)
//     })
// }

// console.log("Fetching Data1....");
// let p1=asyncFunction1();
// p1.then((res)=>{
//     console.log("Fetching Data2....");
// let p2=asyncFunction2();
// p2.then(()=>{
// })
// })




// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Id",dataId);
//         resolve("Success");
//         },4000)
//     })
// }
// // getData(1).then((res)=>{
// //     console.log(res);
    
// //     getData(2).then((res)=>{
// //         console.log(res);
// //     })
// // })
// getData(1).then(()=>{
//     return getData(2);
// }).then((res)=>{
//     console.log("Success");
// })


// function api(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data",data);
//             resolve(200);
//         },2000)
//     })
// }

// async function getweatherData(){
//     console.log("Getting data 1 .....")
//     await api(1);
//     console.log("Getting data 2");
//     await api(2);
// }

function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataid);
            resolve(200);
        },2000)
    })
}



async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}