
let promise1 = new Promise((resolve,reject)=>{
	let time = Math.floor(Math.random()*3);
    setTimeout(()=>{
        let obj = {
            promise1:'promise 1',
            time:time
        }
        resolve(obj);
    },time*1000);
})
let promise2 = new Promise((resolve,reject)=>{
	let time = Math.floor(Math.random()*3);
    setTimeout(()=>{
        let obj = {
            promise2:'promise 2',
            time:time
        }
        resolve(obj);
    },time*1000);
})
let promise3 = new Promise((resolve,reject)=>{
	let time = Math.floor(Math.random()*3);
    setTimeout(()=>{
        let obj = {
            promise3:'promise 3',
            time:time
        }
        resolve(obj);
    },time*1000);
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
   Document.getElementById('second').innerText=values[0];
	
}).catch((error)=>{
    console.log(error);
});