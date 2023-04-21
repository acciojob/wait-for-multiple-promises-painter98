
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

Promise.all([promise1,promise2,promise3]).then(([a,b,c])=>{
    document.getElementById('loading1').innerText = a.time;
	document.getElementById('loading2').innerText = b.time;
	document.getElementById('loading3').innerText = c.time;
   document.getElementById('result').innerText = a.time+b.time+c.time;
	
}).catch((error)=>{
    console.log(error);
});