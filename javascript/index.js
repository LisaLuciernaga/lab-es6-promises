// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  getInstruction("mashedPotatoes", 1, (step2) => {
    getInstruction("mashedPotatoes", 2, (step3) => {
      getInstruction("mashedPotatoes", 3, (step4) => {
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
      }, (error) => console.log(error));
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
    }, (error) => console.log(error));
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
.then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${steak[0]}</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
}).then((step1)=>{
  obtainInstruction('steak', 1);
  document.querySelector("#steak").innerHTML += `<li>${steak[1]}</li>`;
}).then(()=>{
  obtainInstruction('steak', 2);
  document.querySelector("#steak").innerHTML += `<li>${steak[2]}</li>`;
}).then(()=>{
  obtainInstruction('steak', 3);
  document.querySelector("#steak").innerHTML += `<li>${steak[3]}</li>`;
}).then(()=>{
  obtainInstruction('steak', 4);
  document.querySelector("#steak").innerHTML += `<li>${steak[4]}</li>`;
}).then(()=>{
  obtainInstruction('steak', 5);
  document.querySelector("#steak").innerHTML += `<li>${steak[5]}</li>`;
}).then(()=>{
  obtainInstruction('steak', 6);
  document.querySelector("#steak").innerHTML += `<li>${steak[6]}</li>`;
}).then(()=>{
  obtainInstruction('steak', 7);
  document.querySelector("#steak").innerHTML += `<li>${steak[7]}</li>`;
})

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...