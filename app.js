// Tableau de citations
const citations = [
    "Le succès est la somme de petits efforts répétés jour après jour.",
    "Apprendre sans réfléchir est vain. Réfléchir sans apprendre est dangereux.",
    "La simplicité est la sophistication suprême.",
    "La meilleure façon de prédire l’avenir, c’est de le créer."
];

// Fonction de génération aléatoire
function citationAleatoire() {
    const index = Math.floor(Math.random() * citations.length);
    return citations[index];
}

// Export du module
module.exports = citationAleatoire;