const prompt = require ('prompt-sync')();

const op = prompt("Entrez l'opération (+, -, *, /, ^, √, ! ):");
const num1 = Number(prompt("entrer le premier nombre:"));
const num2 = Number(prompt("entrer le deuxieme nombre:"));

switch(op){ 
  
  case '+':
     
     const sum = num1 + num2;
     console.log(`le resultat est : ${sum}`);
    break;
  
  case '-':
    
     sous = num1 - num2;
    console.log(`le resultat est : ${sous}`);
    break;

  case '*':
    mult = num1 * num2;
    console.log(`le resultat est : ${mult}`);
    break;

  case '/':
    if (num2 == 0){
      console.log("erreur ne divis pas par 0");
    }else {
    div = num1 / num2;
    console.log(`le resultat est : ${div}`);
    }
    break;
  
   case '^':


    break;
  
  case '√':
    break;
 
  case '!':
    break;
    */

  default :
    console.log("erreur");
    resultat = undefined;
  
}
