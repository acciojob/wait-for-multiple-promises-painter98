
/*let promise1 = new Promise((resolve,reject)=>{
	let time = Math.random()*3;
    setTimeout(()=>{
        let obj = {
            promise1:'promise 1',
            time:time
        }
        resolve(obj);
    },time*1000);
})
let promise2 = new Promise((resolve,reject)=>{
	let time = Math.random()*3;
    setTimeout(()=>{
        let obj = {
            promise2:'promise 2',
            time:time
        }
        resolve(obj);
    },time*1000);
})
let promise3 = new Promise((resolve,reject)=>{
	let time = Math.round(Math.random()*3,3);
    setTimeout(()=>{
        let obj = {
            promise3:'promise 3',
            time:time
        }
        resolve(obj);
    },time*1000);
})

Promise.all([promise1,promise2,promise3]).then(([a,b,c])=>{
    document.getElementById('Promise 1Loading').innerText = a.time;
	document.getElementById('Promise 2Loading').innerText = b.time;
	document.getElementById('Promise 3Loading').innerText = c.time;
   document.getElementById('Loading').innerText = a.time+b.time+c.time;
	
}).catch((error)=>{
    console.log(error);
});*/


const res = document.getElementById("output");

const promises = [
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 1", time: time / 1000 }), time);
  }),
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 2", time: time / 1000 }), time);
  }),
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 3", time: time / 1000 }), time);
  }),
];

async function callFns() {
  const start = new Date();
  // Use Promise.all to wait for all Promises to resolve
  res.innerHTML += `
            <tr id="loading">
                <td colspan=2>Loading...</td>
            </tr>
          `;
  await Promise.all(promises)
    .then((results) => {
      res.innerHTML = ``;
      // Log the array of results
      results.forEach((e) => {
        res.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td>${e.time}</td>
            </tr>
          `;
      });
    })
    .catch((error) => {
      console.error(error);
    });

  const end = new Date();
  const timeInMillis = end - start;
  res.innerHTML += `
            <tr>
                <td>Total</td>
                <td>${timeInMillis / 1000}</td>
            </tr>
          `;
}
callFns();