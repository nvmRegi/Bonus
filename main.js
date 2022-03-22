let bool = true;
let i;
do{
    let variabile = prompt("Scegliere tra pari o dispari:");
    let result = variabile.toLowerCase();
    if (result=='dispari'){
        i=1;
        bool = false; //dispari
    } else if (result=='pari'){
        i=0;
        bool = false; //pari
    }
} while(i);

let num;
do{
    num = prompt("Scegliere un numero compreso tra 1 e 9");
} while(num > 9 || num < 1);


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const numRandom = randomIntFromInterval(1, 9);
  console.log(numRandom);

ris = numRandom%2; //restituisce 1 o 0
if(ris==i){
    alert("HAI VINTO!");
} else{
    alert("HAI PERSO!");
}