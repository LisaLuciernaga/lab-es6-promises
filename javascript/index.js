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
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
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
  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
})

// Iteration 3 using async/await
async function makeBroccoli() {
  let step1 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");

  let step2 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

  let step3 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

  let step4 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

  let step5 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

  let step6 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

  let step7 = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

}

makeBroccoli();

// Bonus 2 - Promise all
// ...