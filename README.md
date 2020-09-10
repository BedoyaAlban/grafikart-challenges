This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Calculateur d'impôt sur le revenu

On souhaite créer un formulaire permettant de calculer l'impôt que l'on va payer pour l'année courante.
L'objectif de cet exercice est de tester votre capacité à interpréter une consigne et traduire une explication en algorithme.

Le gouvernement a créer une fiche explicative permettant de comprendre le calcul du taux d'imposition mais ce calcul s'avère relativement complexe et on souhaite créer une interface simplifier pour calculer les choses.

[Tranches Impôt](https://www.economie.gouv.fr/particuliers/tranches-imposition-impot-revenu#etapescalculir).

## Niveau 1

Pour commencer on souhaite créer un formulaire dans lequel on va entrée la somme que l'on compte déclarer (valeur net) et le système doit automatiquement calculer l'impôt que l'on va avoir à payer ainsi que la somme qu'il nous restera (On prendra le cas d'un célibataire pour commencer).

## Niveau 2

On ajoutera une case à cocher pour préciser si on est en couple et un autre champs nous permettra de préciser le nombre d'enfant. En fonction de ces nouvelles données le système adaptera le taux.

## Niveau 3

On souhaite avoir un détail du montant que l'on paye par tranche. Le système affichera donc un tableau pour préciser le montant que l'on doit payer pour chaque tranche.

## Boss final

Pour l'exercice final on prendra le problème en sens inverse et on permettra à l'utilisateur d'entrer la somme désiré (après impôt) et le système calculera les revenus net à avoir pour obtenir cette somme après l'imposition.

## Available Scripts

Before you must install dependencies:

### `npm i` or `yarn install`

In the project grafikart-challenge/, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Becareful this project is using Enzyme and Cucumber to run the tests you must have a function component.
If you wanna know more you can see :
[Enzyme](https://enzymejs.github.io/enzyme/)
[Cucumber](https://cucumber.io/docs/guides/10-minute-tutorial/)

### `yarn build` or `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` or `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` or `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
