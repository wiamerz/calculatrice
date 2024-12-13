const prompt = require('prompt-sync')();

while (true) {

  console.log("~~~~~~~~~~Menu~~~~~~~~~~~~");
  console.log("addition (+) ");
  console.log("soustraction (-) ");
  console.log("multiplication (*) ");
  console.log("division (/) ");
  console.log("puissance (^)");
  console.log("racine carree ($) ");
  console.log("factorielle (!) ");
  console.log("quit (q) ");

  const op = prompt("Entrez l'opération (+, -, *, /, ^, $, ! ) ou ( q ) pour quitter : ");

  if (op == 'q') {
      console.log("Merci d'avoir utilisé notre calculatrice. Au revoir ");
      break;
  }

   let num1 = 0;
   let num2=0;

  if (['+','-','*','/','^', '$', '!'].includes(op)){
    num1 = Number(prompt("entrer le premier nombre:"));
  }
  if(['+','-','*','/','^'].includes(op)){
      num2 = Number(prompt("ajoute le deuxieme nombre:"));
  }

switch(op) {
    case '+':
        const sum = num1 + num2;
        console.log(`le resultat est : ${sum}`);
        break;

    case '-':
        const sous = num1 - num2;
        console.log(`le resultat est : ${sous}`);
        break;

    case '*':
        const mult = num1 * num2;
        console.log(`le resultat est : ${mult}`);
        break;

    case '/':
        if (num2 == 0) {
            console.log("erreur ne divise pas par 0");
        } else {
            const div = num1 / num2;
            console.log(`le resultat est : ${div}`);
        }
        break;


    case '^':
        const puiss = Math.pow(num1, num2);
        console.log(`le resultat est : ${puiss}`);
        break;

    case '$':
        if (num1<0){
            console.log("error, the number should note be negative ");
        } else { 
            sqrt = Math.sqrt(num1);
            console.log(`le resultat est : ${sqrt}`);
        }
        break;

    case '!':
        if (num1 < 0) {
            console.log(`La factorielle ne peut pas être négative`);
        } else if (num1 == 0 || num1 == 1) {
            console.log(`Le resultat est : 1`);
        } else {
            let resultat = 1;
            for (let i = 2; i <= num1; i++) {
                resultat *= i;
            }
            console.log(`Le resultat est : ${resultat}`);
        }
        break;

    default:
        console.log(`Paramètre non trouve`);
        break;
}
}