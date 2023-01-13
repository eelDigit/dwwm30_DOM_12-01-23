// [Functions]_______________________

function faireQueslqueChose() {
  console.log("je suis une function !");
}

faireQueslqueChose();

const faireUneTache = (chat) => {
  // console.log(" function fleché");
  console.log(chat);
};
faireUneTache(12);
faireUneTache("les courses");

function calcule(x, y) {
  return x + y;
}

console.log(calcule(5, 2));

(function () {
  console.log("je me joue toute seul");
})();

(() => {
  console.log("je me joue toute seul ---------");
})();

// __________________________________________

function calculeAjoute2() {
  let a = 2;
  console.log(a);
  return a + 2;
}

// console.log(a);

console.log(calculeAjoute2(6));

// ______________________________________

let b = 3;

function calculeAjoute3() {
  console.log(b);
  return b + 2;
}

// console.log(calculeAjoute2());
calculeAjoute3();
console.log(calculeAjoute3());

// _______[var]_______________________________

function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // c'est la même variable !
    console.log(x); // 2
  }
  console.log(x); // 2
}

//   ---------------------
//   ---------------------

function letTest() {
  let x = 1;
  if (true) {
    let x = 2; // c'est une variable différente
    console.log(x); // 2
  }
  console.log(x); // 1
}

// console.log(calculeAjoute2());
// calculeAjoute4();
// console.log(calculeAjoute4());
