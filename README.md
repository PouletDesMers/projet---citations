# projet---citations

Lien du repository : [ICI](https://github.com/PouletDesMers/projet---citations)

apres avoir creer un repository sur github, on clone le repository sur notre machine locale avec la commande `git clone https://github.com/PouletDesMers/projet---citations`

## Installation

Après le clone je me rends dans le dossier du projet avec la commande `cd projet---citations` et j'initialise le projet avec la commande `npm init -y` puis j'installe jest pour les tests avec la commande `npm install --save-dev jest` et je modifie le fichier package.json pour ajouter `"test": "jest"`.

## Utilisation

en fesant `npm test` on obtient 
```sh
projet---citations main  ? ✗ npm test

> projet---citations@1.0.0 test
> jest

 PASS  test/app.test.js
  ✓ La fonction retourne une citation (6 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.682 s
Ran all test suites.
```