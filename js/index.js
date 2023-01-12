
//  alert("coucou !");


// console.log("coucou !");


// var chat = "hello !";

// var chat = "chat";
// console.log(chat);



// let monChatNoir = "hello ! ";
// monChatNoir = "chien";
// monChatNoir = "souris";
// console.log(monChatNoir);



// const pigeon = "pigeon";

// console.log(pigeon);

// ===================================================
// DOM 
// ===================================================

const title = document.querySelector("h1");
// const btn1 = document.querySelector("#btn-1");


// const question = document.querySelector('h2');

// document.querySelector('h2').style.color = "green";

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");

const bonneReponse = document.querySelector(".p1");
const mauvaiseReponse = document.querySelector(".p2");


btn1.addEventListener("click", () => {
    // console.log("click");
    bonneReponse.style.visibility = "visible";
    bonneReponse.style.color = "green";
    // mauvaiseReponse.style.visibility = "hidden";
    // mauvaiseReponse.style.display = "none";
})
btn2.addEventListener('click', () => {
    // console.log("chat");
    mauvaiseReponse.style.visibility = "visible";
    mauvaiseReponse.style.color = "red";
    // bonneReponse.style.visibility = "hidden";
    bonneReponse.style.display = "none";


})

// questionContainer.addEventListener("click", () => {
//     console.log("click");
//     questionContainer.style.borderRadius = "100px";


// })

