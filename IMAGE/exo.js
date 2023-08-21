/*const eleves=['Abalo','Kossi','Bolou','Dominique']
//for(let i=0; i< eleves.length; i++)
for(let i= prompt("Donne un chiffre"); i< eleves.length; i++)
//for(const i in eleves)
//for(const i of eleves)
{
//if (i ===0) {continue}
console.log(eleves[i]+' '+i)
//console.log(i)
}
*/
/*let Age= prompt("quel ton age ?")
const pays= prompt("quel ton pays ?")

function peut_Conduire(Age,pays) {
    if( 
       (Age>=18 && pays==='Tg') ||
       (Age>=15 && pays==='Gh')
       )
       return("vous avez "+Age+" ans et du "+pays+" c'est posible")
 else 
      return("vous avez "+Age+" ans et du "+pays+" c'est Imposible")
    }
    console.log(peut_Conduire(Age,pays));
*/
/*let cpn1=prompt('Nombre de cpn1')
let Milda=prompt('Nombre de Milda')
function validation(cpn1,Milda) {
    if(
        (cpn1 != Milda) ||
        (Milda!= cpn1)
    )
    return('Nombre de CPN1 égale à '+cpn1+' est different du nombre de Milda sorti qui est de '+Milda)
    else return('')
}
console.log(validation(cpn1,Milda));
*/
/*const nom=prompt("Quel est votre nom")
const prenom=prompt("Quel est votre Prenom")

function saluer (nom,prenom) {
    return "Salut Monsieur " + nom+' '+ prenom
}
// On appelle ensuite notre fonction avec 
console.log(saluer(nom,prenom) )
*/
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: 'Hello world'})
})