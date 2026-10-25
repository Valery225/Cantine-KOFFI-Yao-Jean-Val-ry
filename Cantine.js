// Données de la commande
const client = "Awa";
const codeplat = 1;
const quantiteTexte = "3";
const montantVerse = 5000;


// Conversion de la quantité en nombre
const quantite = Number(quantiteTexte);

// Prix unitaire et nom du plat (switch)
let nomPlat;
let prixUnitaire;

switch (codeplat) {
    case 1:
        nomPlat = "Atttieke-poisson";
        prixUnitaire = 1500;
        break;
    case 2:
        nomPlat = "Riz-poulet";
        prixUnitaire = 2000;
        break;
    case 3:
        nomPlat = "Alloco-oeuf";
        prixUnitaire = 1000
        break;
}

//Fonction calcule du montant total
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
const total = calculerTotal(prixUnitaire, quantite);

//Affichage du récapitulatif
console.log( `===== Caisse de la cantine =====`);
console.log(`Client : ${client}`);

for (let i = 1; i <= quantite; i++) {
  console.log(`Portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`);
}
    console.log(`Total à payer : ${total} FCFA`);
    console.log(`Montant versé : ${montantVerse} FCFA`);

if (montantVerse >= total) {
       console.log(`Monnaie à rendre : ${montantVerse - total} FCFA`);
} else {
    console.log(`Montant manquant : ${total - montantVerse} FCFA`);
}