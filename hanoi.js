/* 
Creer la tour d'hanoï

github creer un repo
cloner

1 branch main
1 branch dev

si vous estimez qu'il faut d'autre branche c'est à justifier.
Vous devez justifier chaque commit.

Le programme vous demande le nombre de palets.
Le programme doit afficher l'etat de chaque pilier à chaque tour.
Le programme affiche le nombre de tour.

Vous devez développez au minimum un programme qui utilise l'itératif. (fichier 1)
BONUS Un programme qui qui fonctionne avec du récursif.(fichier 2)
Merger sur le main.
sortir un rapport des log du git.

*/

/* 

demander le nomre de pallets 
3 pilliers A = nombre de pallet B = 0  C = 0 

variables : 
- nombre de tours qui va s'incrémenter   N
- nombre de pallet / prompt = Z  
- A : premier pillier décrémenter à chaque tour


position initiale 

Nombre de pallets = 3 

N = nombre de tours 
deux conditions de fin : 
 - pillier A = 0 
 - pillier C = Nombre de pallets 


tant que A != 0 && C != Z 


condition pour les boucles les piliers ne doivent pas être supérieur au nombre de palets 
Z > B ou C 

pour Z = 3 
A = nombre de pallets = Z = 3  
B = 0 
C = 0 

N + 1 
A = 2 (-1) décrémenter 
B = 0 
C = 1 (+1) incrémenter 

N + 2 
A = 1 (-1) décrementer 
B = 1 (+1) incrémenter 
C = 1 (+1) incrémenter 

N + 3 
A = 1 
B = 2 (+1) incrémenter
C = 0 (-1) décrementer

N + 4
A = 0 (-1) décrémenter
B = 2 
C = 1 (+1) incrémenter

N + 5 
A = 1 (+1) incrémenter
B = 1 (-1) décrémenter
C = 1 

N + 6 
A = 1 
B = 0 (-1) décrementer
C = 2 (+1) incrémenter

N + 7
A = 0 (-1) décrementer 
B = 0 
C = 3 (+1) incrémenter

A = 0 && C = 3 = Z  

*/
let nbDisques = prompt('Entrez le nombre de disques :')
let tour = 0;

function nbrTour(n) {
    return nbrTour = 2**n -1
 }

function deplacerDisque(pileDepart, pileArrivee) {
  pileArrivee.push(pileDepart.pop())
}

function tourHanoi(n, depart, arrivee, intermediaire) {
  if (n > 0) {
    tourHanoi(n - 1, depart, intermediaire, arrivee)
    
    // numéro du Tour
    tour = tour + 1;
    console.log("")
    console.log("Vous êtes au tour numéro " + tour)

   
    console.log(
      'Déplacer le disque ' + n + ' de ' + depart + ' vers ' + arrivee,
    );
    deplacerDisque(eval(depart), eval(arrivee));
    console.log(
      'Pile A : ' + A.length +
      ', Pile B : ' + B.length + 
      ', Pile C : ' + C.length
    );
    tourHanoi(n - 1, intermediaire, arrivee, depart)
  }
} 
// Initialiser les piles A, B, C avec le nombre de disques spécifié
let A = []
for (let i = nbDisques; i >= 1; i--) {
        A.push(i)
    }
let B = []
let C = []

tourHanoi(nbDisques, 'A', 'C', 'B')

let mustTurn = nbrTour(nbDisques)

console.log(`

Le nombre de tour nécessaire pour ${nbDisques} disques est de ${mustTurn}

`)

// function for Hanoi Tower 