# Inventaire Bacalan : mode d'emploi

Appli : https://lewayowayo.github.io/inventaire-bacalan/
Tableau : Google Sheet « Inventaire Bacalan » (Drive d'Etienne)

## Pour l'équipe
1. Ouvre le lien une première fois avec du réseau, puis ajoute-le à l'écran d'accueil (Safari : Partager > Sur l'écran d'accueil ; Chrome Android : menu ⋮ > Ajouter à l'écran d'accueil). Ensuite l'appli s'ouvre même sans réseau.
2. Mets ton prénom, compte avec − / + (ou touche le chiffre pour taper une valeur). Chaque tap est enregistré sur le téléphone, même si l'appli se ferme ou se recharge.
3. Bouton **Récap →** puis **Envoyer l'inventaire**. Avec du réseau, il part tout de suite dans le tableau et par mail. Sans réseau (chambre froide), il attend et part tout seul dès que le téléphone retrouve du réseau : tu peux fermer l'appli.

## Pour changer la liste des produits
- Dans l'appli : crayon en haut à droite, code responsable (onglet `config` du Sheet, ligne `pin`, 1234 au départ). Renommer, changer l'unité, le pas du bouton +, les choix, ajouter / supprimer, glisser-déposer avec ≡. En quittant le mode modification, la liste est envoyée au Sheet et tous les téléphones la récupèrent à leur prochaine ouverture.
- Ou directement dans le Sheet, onglet `produits` : une ligne par produit (colonne `type` : `qty` ou `choice`, `choix` séparés par `|`, `actif` FALSE pour cacher un produit).

## Où arrivent les inventaires
- Onglet `inventaires` : un inventaire par ligne, avec le récap complet.
- Onglet `lignes` : une ligne par produit et par inventaire (pratique pour faire des graphiques ou des filtres).
- Un mail récap part aux adresses de l'onglet `config`, ligne `emails` (séparées par des virgules).

## Mise en service (déjà faite)
1. Sheet > Extensions > Apps Script, coller `Code.gs`, exécuter `setup`, autoriser.
2. Déployer > Nouveau déploiement > Application web (Exécuter en tant que : Moi ; Accès : Tout le monde). Copier l'URL `/exec` dans `index.html`, constante `API_URL`.
3. Après une modification de `Code.gs` : Déployer > Gérer les déploiements > crayon > Nouvelle version. L'URL ne change pas.
