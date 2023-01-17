
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

// console.log(x + " et " + y + " l'éclaire sont différents");

// console.log(x + ' et ' + y + ' l\'éclaire sont différents');

// console.log(` 
// ${x} et  ${y}   l'éclaire sont différents 
// `);


// [ternaire]________________________________


if (x === y) console.log(" true ");

x === y ? console.log("true") : console.log("false");




// ========================================
// mousemove
// ========================================

const mouse = document.querySelector(".mouse");
// console.log(mouse);


window.addEventListener("mousemove", (e) => {
    // console.log(e);
    // console.log( " x: ",e.pageX,  "y: " , e.pageY);
    mouse.style.left = e.pageX + "px";
    // mouse.style.left = e.clientX + "px";
    // mouse.style.background = "red";
    mouse.style.top = e.pageY + "px";
    // mouse.style.top = e.clientY + "px";
})

window.addEventListener("mousedown", () => {

    // console.log("test");
    mouse.style.transform = "scale(2)translate(-25%, -25%) ";
    mouse.style.border = "2px solid yellow"

})
window.addEventListener("mouseup", () => {

    // console.log("test");
    mouse.style.transform = "scale(1)translate(-50%, -50%) ";
    mouse.style.border = "2px solid red";

})

questionContainer.addEventListener("mouseenter", (e) => {

    questionContainer.style.background = "yellow";
})
questionContainer.addEventListener("mouseout", () => {

    questionContainer.style.background = "red";
})
questionContainer.addEventListener("mouseover", () => {

    questionContainer.style.transform = " rotate(5deg)";
})

// =============================================
// keypress
// =============================================

const keypressContainer = document.querySelector(".keypress");
// console.log(keypressContainer);

const key = document.getElementById("key");
//  console.log(key);



document.addEventListener("keypress", (e) => {
    console.log(e.key);
    key.textContent += e.key;

    if (e.key === "j") {
        keypressContainer.style.background = "yellow";
    } else if (e.key === "b") {
        keypressContainer.style.background = "blue";

    } else {
        keypressContainer.style.background = "green";

    }


    if (e.key === "k") ring(e.key);


})


const ring = () => {

    const audio = new Audio();

    audio.src = "./assets/sound/k.mp3";
    audio.src = "./k.mp3";
    audio.play();
    console.log("testttttttttttttt");
}

// ===================================================
// formulaire
// =================================================
const inputName = document.querySelector('input[type="text"] ');
// console.log(inputName);
let pseudo = "";

inputName.addEventListener('input', (e) => {
    // console.log(e.target.value);
    pseudo = e.target.value;
    console.log(pseudo);
})


console.log(pseudo);

// pour le langage 
const select = document.querySelector("select");
console.log(select);
let language = "";

select.addEventListener('input', (e) => {
    // console.log(e);
    // console.log(e.target.value);

    language = e.target.value
    // console.log(langage);
})


const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
    //   console.log("test");

    e.preventDefault();
    //   console.log("test");

    if (cgv.checked) {

        document.querySelector("form > div").innerHTML = `
    <h3>pseudo : ${pseudo} </h3>
<h4> language : ${language} </h4> 
    
    `;

    } else {
        alert("veuillez accepter les CVG");
    }

});
