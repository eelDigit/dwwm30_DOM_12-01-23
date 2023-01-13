
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
// console.log(title);


// const btn1 = document.querySelector("#btn-1");


// const question = document.querySelector('h2');

// document.querySelector('h2').style.color = "green";

const questionContainer = document.querySelector(".click-event");
// const btn1 = document.querySelector("#btn-1");
const btn1 = document.getElementById("btn-1");
// console.log(btn1);

// const btn2 = document.querySelector("#btn-2");
const btn2 = document.getElementById("btn-2");

const bonneReponse = document.querySelector(".p1");
const mauvaiseReponse = document.querySelector(".p2");


btn1.addEventListener("click", () => {
    // console.log("click");
    // bonneReponse.style.visibility = "visible";
    // bonneReponse.style.color = "green";
    // mauvaiseReponse.style.visibility = "hidden";
    // mauvaiseReponse.style.display = "none";
    // bonneReponse.classList.add("show_response");
    bonneReponse.classList.add("good_response");
    btn1.style.background = "green";

    //    ---[desactive le button 2]------------------

    // document.querySelector("#btn-2").disabled = true;
    btn2.disabled = true;
    // document.getElementById("btn-2").disabled = true;
})
btn2.addEventListener('click', () => {
    // console.log("chat");
    // mauvaiseReponse.style.visibility = "visible";
    // mauvaiseReponse.style.color = "red";
    // bonneReponse.style.visibility = "hidden";
    // bonneReponse.style.display = "none";
    // mauvaiseReponse.classList.add("show_response");
    mauvaiseReponse.classList.add("bad_response");
    btn2.style.background = "red";



})

// questionContainer.addEventListener("click", () => {
//     console.log("click");
//     questionContainer.style.borderRadius = "100px";


// })

// const test = document.getElementsByClassName("box");
// console.log(test);



// =============================
// type de données
// =============================


let unText = "voici un texte ";
// console.log(unText);
let number = 12;
number = 65;
// console.log(number);
let boulean = true;
let boulean1 = false;
let array = ["je", "suis", 24, true]//tableau
// console.log(array[2]);

let object = {
    prenom: "christian",
    nom: "delorme",
    address: {
        ville: "Paris",
        rue: "danton",
        num: 5
    }
}
// console.log(typeof array); // les arrays sont des objects en JS.

// console.log(object.prenom);
// console.log(object.address.ville);
// console.log(object.address);

let fleur; //hundefined
// console.log(fleur);

let arbre = null;
// console.log(arbre);

// ========================================
// Operateurs
// ========================================


// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 * 5);
// console.log(4 / 5);
// console.log(4 ** 5);

// [opérateurs d'affectation]__________________

let total = 0;

// total = total + 1;

// total++;
// total++;
// total++;
// total++;

// total--;
// total--;
// total--;
// total--;
// total--;

// --total;

total = 5;
// total = total + 20;
total += 5;
total += 5;
total += 5;
total += 5;

total -= 5;
total -= 5;
total -= 5;


total *= 5;
total /= 5;

// console.log(total);


// ========================================
// structure de contrôle
// ========================================
// let x = 2;
// let y = 20;


// if (x < y) {
//     console.log("x est inférieur a y");
// } else {
//     console.log("x est superieur a y");

// }

// if (x) {
//     console.log("x existe");
// }

// if (!x) {
//     console.log("x n'existe pas");
// }

// ________________________________
// if (x !== y) {
//     console.log("true");
// } else {
//     console.log("false");
// }
// __________________________________

let x = 2;
let y = 2;

if (x === y && x > 5) {
    console.log("true")
} else {
    console.log("false");
}


if (x === y || x > 5) {
    console.log("true")
} else {
    console.log("false");
}


if (x === y || x > 5) {
    console.log("true")
} else if (x == y) {
    console.log("salut");
} else {
    console.log("coucou");
}

// [concatenation ]__________________________

console.log(x + " et " + y + " l'éclaire sont différents");

console.log(x + ' et ' + y + ' l\'éclaire sont différents');

console.log(` 
${x} et  ${y}   l'éclaire sont différents 
`);


// [ternaire]________________________________


if (x === y) console.log(" true ");

x === y ? console.log("true") : console.log("false");


