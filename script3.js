/*for(let exo= 6;exo < 10 && exo>5; exo++)
{console.log('variable $exo '+ exo + ' log');
}

document.body.innerText = "Je joue avec le JavaScript";
document.body.innerHTML = "<h1>Je joue avec le JavaScript</h1>";
console.log(document.querySelector("#hello"));*/

//prompt("quel est ton nom ?")
 
/*let a = 2
let b = 3
let Result = a + b
alert(Result);*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//FORMATION JAVA SCRIT : https://aymeric-auberton.fr/academie/js/exercices

/*EXERCE 0: A l'aide de la fonction prompt(). Insérer dans la page HTML
 la chaine de caractères inscrites dans la boite de dialogue.*/
//REPONSE:
 /*let test = prompt("Merci d'inscrire une chaine de caractères ?");
document.body.innerHTML = test;*/

//EXEXERCICE 1
//Créer une variable result qui contient la somme des variables a et b. 
//Afficher le résultat de la somme dans une boite de dialogue.
//REPONSE:
/*let a = 42;
let b = 7569;
let result = a + b;
alert(result);*/

//EXERCICE 2
//Modifier le code ci-dessous pour calculer la moyenne des notes.
//REPONSE:
/*JS
let note_maths = 11;
let note_francais = 9;
let note_hg = 16;
let moy = (note_maths + note_francais + note_hg)/3;
alert('La moyenne est de ' + moy);
document.body.innerHTML=('La moyenne est de ' + moy);
*/
/*EXERCICE 3
//Déclarer une variable budget qui contient le budget de votre choix. 
Déclarer une variable achats qui contient le montant de votre choix. 
Afficher si le budget permet de payer les achats.
*/
//REPONSE:
/*let budget = 1553.89;
let achats = 1554.76;
if(budget >= achats) {
   alert('Le budget (' + budget + ' €) permet de payer tous les achats (' + achats + ' €)');
} else {
   alert('Le budget ne (' + budget + ' €) permet pas de payer tous les achats (' + achats + ' €)');
}*/

//EXERCICE 4 - PRIX HT > TTC, LEVEL 1
//A l'aide de la fonction prompt(), demander un prix HT à l'utilisateur 
//puis insérer le prix TTC (TVA 20 %) dans la page HTML à l'aide de document.body.innerText.

//REPONSE:
/*let ht = prompt("Montant HT ?");
let ttc = ht * 1.2;
document.body.innerText = ttc;*/

//EXERCICE 5 - PRIX HT > TTC, LEVEL 2
//A l'aide de la fonction prompt(), demander un prix HT puis un taux de la TVA à l'utilisateur 
//puis insérer le prix TTC dans la page HTML à l'aide de document.body.innerText.
//REPONSE:
/*let ht = prompt("Montant HT ?");
let taux_tva = prompt("Taux de TVA ?");
let taux_tva_calcul = (taux_tva / 100) + 1;
let ttc = ht * taux_tva_calcul;
document.body.innerText = ttc;
*/

//EXERCICE 6 - PRIX HT > TTC, LEVEL 3
//A l'aide de la fonction prompt(), demander un prix HT puis un taux de la TVA à l'utilisateur 
//puis insérer le prix TTC dans la page HTML à l'aide de document.body.innerHTML. 
//Si le prix TTC est strictement supérieur à 100 on affichera le prix en rouge sinon en vert.
// Pour simplifier on utilisera les bouts de code suivants sur l'élément HTML de votre choix :
//REPONSE:
//Rouge : style="color: red;"
//Vert : style="color: green;"
//Par exemple : <h1 style="color: red;">...</h1>
/*
let ht = prompt("Montant HT ?");
let taux_tva = prompt("Taux de TVA ?");
let ttc = ht * (taux_tva / 100) + 1;
if(ttc > 100) {
   document.body.innerHTML = '<h1 style="color: red;">' + ttc + '</h1>';
} else {
   document.body.innerHTML = '<h1 style="color: green;">' + ttc + '</h1>';
}
*/

//EXERCICE 7
//A partir de la page HTML suivante, remplacer le contenu de l'élément HTML #cocktail
// par Long Island Iced Tea à l'aide d'un script JS.
//REPONSE:
/*HTML
<body>
   <h1>Mes <span>cocktails préférés</span></h1>
   <p>Mojito</p>
   <p>Gin Fizz</p>
   <p>Bloody mary<p>
   <p>Long Island Iced Tea</p>
   <p>Mais si je ne devais qu'en retenir qu'un : <strong id="cocktail"></strong></p>
</body>
*/

//EXERCICE 8
//Grâce à la boucle de votre choix, afficher en console tous les multiples de 10 jusqu'à 1000.
//REPONSE:
/*
for(let i = 10;i <= 1000;i+=10) {
   console.log(i);
}
*/

//EXERCICE 9
//Grâce à la fonction prompt(), demander l'âge de l'utilisateur, puis à l'aide d'une condition, déterminer
// et afficher via une boite de dialogue si l'utilisateur est mineur ou majeur. Pour cet exercice
// on considère qu'un individu est majeur à partir de 18 ans.
//REPONSE:
/*let age = prompt("Quel est votre âge ?");
if(age >= 18) {
   alert('Vous êtes majeur !');
} else {
   alert('Vous êtes mineur !');
}
*/

//EXERCICE 10
//En utilisant la boucle while(), afficher dans la console tous les codes postaux 
//possibles pour le département 77.
//REPONSE:
/*let cp = 77000;
while(cp <= 77999) {
   console.log(cp);
   cp++;
}
*/

//.EXERCICE 11
//En utilisant la boucle for, afficher la table de multiplication du chiffre 5 dans la page HTML.
//REPONSE:
/*let n = 5;
let html = '';
for(let i = 1;i <= 10;i++) {
   html = html + n + ' x ' + i + ' = ' + (n * i) + ' <br />';
}
document.body.innerHTML = html;
*/

//EXERCICE 12
//En utilisant deux boucles for, écrire un script qui produit le résultat ci-dessous, dans la page HTML.
//REPONSE:
/*Résultat
1
22
333
4444
55555

let html = '';
for(let i = 1;i <= 5;i++) {
   for(let k = 1;k <= i;k++) {
      html = html + i;
   }
   html = html + '<br />';
}
document.body.innerHTML = html;
*/

//EXERCICE 13
/*Déclarer une variable avec le nom de votre choix et avec la valeur 0. Tant que cette variable n'atteint pas 20, il faut :
l'afficher dans la page HTML;
incrémenter sa valeur de 2 ;*/
//REPONSE:
/*let html = '';
let k = 0;

while(k <= 20) {
   html = html + k + '<br />';
   k = k + 2;
}
document.body.innerHTML = html;
*/

//EXERCICE 14 - TABLEAU, LEVEL 1
//Construire un tableau HTML, sans en-tête, avec X lignes et avec Y colonnes dans un élément <table>. Ajouter dans les celulles un contenu aléatoire de votre choix. Enfin, placer ce tableau dans la page HTML.
//REPONSE:
/*let tableau = '<table>';
let lignes = 5;
let colonnes = 3;

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + '<td>yolo</td>';
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;
*/

//EXERCICE 15 - TABLEAU, LEVEL 2
//Avec le code de l'exercice précédent (14) demander via la fonction prompt(), X lignes et Y colonnes puis constuire le tableau HTML et l'insérer dans la page HTML.
//REPONSE:
/*let lignes = prompt("Nombre de lignes ?");
let colonnes = prompt("Nombre de colonnes ?");
let tableau = '<table>';

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + '<td>yolo</td>';
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;
*/

//EXERCICE 16 - NOMBRE ALÉATOIRE, LEVEL 1
//L'instruction JS suivante permet d'obtenir un nombre aléatoire entre 0 et 100. La limite haute (100) n'est pas incluse dans le tirage aléatoire.
/*JS
Math.floor(Math.random() * 100);
A l'aide de cette instruction, insérer dans la page HTML 10 nombres aléatoires sous la forme d'une liste à puces.

let html = '<ul>';
let nalea = 10;
for(let i = 0;i < nalea;i++) {
   html = html + '<li>' + Math.floor(Math.random() * 100) + '</li>';
}
html = html + '</ul>';
document.body.innerHTML = html;
*/

//EXERCICE 17 - NOMBRE ALÉATOIRE, LEVEL 2
//A l'aide du code de l'exercice précédent, insérer dans la page HTML 10 nombres aléatoires sous la forme d'une liste à puces, compris entre 0 et 10 (inclus). Via une condition, afficher en console si le nombre 10 fait partie du tirage.
//REPONSE:
/*let html = '<ul>';
let nalea = 10;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 11);
   if(tmp == 10) {
      console.log('Le nombre 10 fait parti du tirage.');
   }
   html = html + '<li>' + tmp + '</li>';
}
html = html + '</ul>';
document.body.innerHTML = html;
*/

//EXERCICE 18 - NOMBRE ALÉATOIRE, LEVEL 3
//A l'aide du code de l'exercice précédent, insérer dans la page HTML 10 nombres aléatoires sous la forme d'une liste à puces, compris entre 0 et 10 (inclus). Via une condition, compter le nombre de fois où le nombre 10 fait partie du tirage. A la fin du script, insérer en plus dans la page HTML le nombre en question.
//REPONSE:
/*let html = '<ul>';
let nalea = 10;
let nalea10 = 0;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 11);
   if(tmp == 10) {
      nalea10++;
   }
   html = html + '<li>' + tmp + '</li>';
}
html = html + '</ul>';
html = html + '<p>Il y a eu ' + nalea10 + ' tirages de 10.</p>'
document.body.innerHTML = html;
*/

//EXERCICE 19 - NOMBRE ALÉATOIRE ET ARRIÈRE-PLAN, LEVEL 4
//L'instruction JS suivante permet de modifier la couleur d'arrière-plan de l'élément HTML <body>.
//REPONSE:
/*JS
document.body.style.background = 'red'; // Modifie la couleur d'arrière-plan en rouge (couleur texte CSS)
document.body.style.background = 'rgb(69, 24, 67)'; // Modifie la couleur d'arrière-plan en violet (couleur en RGB)
document.body.style.background = '#FF1493'; // Modifie la couleur d'arrière-plan en violet (couleur en hexadécimal)
A l'aide du code de l'exercice précédent et de cette nouvelle instruction, écrire un code JS qui modifie aléatoirement la couleur d'arrière-plan de l'élément HTML <body>.

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let color = "rgb(" + r + ", " + g + ", " + b + ")";
document.body.style.background = color;
*/

//EXERCICE 20 - NOMBRE ALÉATOIRE ET IMAGES, LEVEL 5
/*Le service Picsum permet d'obtenir des images libres de droit depuis une adresse web. Par exemple, le lien ci-dessous affiche l'image avec l'identifiant #42 en résolution 350x350 :
https://picsum.photos/id/42/350/350

A l'aide de ce service, insérer dans la page HTML 12 images alétoires depuis le service Picsum.*/
//REPONSE:
//Solution A

/*let html = '';
let nalea = 12;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 1024);
   html = html + '<img src="https://picsum.photos/id/' + tmp + '/350/350" />';
}
document.body.innerHTML = html;
Solution B

let html = '';
let nalea = 12;
for(let i = 1;i <= nalea;i++) {
   html = html + '<img src="https://picsum.photos/350/350?random=' + i + '" />';
}
document.body.innerHTML = html;
*/