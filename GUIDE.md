# Inventaire Bacalan : mode d'emploi

- Appli : https://lewayowayo.github.io/inventaire-bacalan/
- Tableau : Google Sheet « Inventaire Bacalan » (Drive d'Etienne)
- Code responsable (modifier la liste depuis l'appli) : `1234` au départ, ligne `pin` de l'onglet `config`.

## Pour l'équipe
1. Ouvre le lien une première fois avec du réseau, puis ajoute-le à l'écran d'accueil (Safari : Partager > Sur l'écran d'accueil ; Chrome Android : ⋮ > Ajouter à l'écran d'accueil). Ensuite l'appli s'ouvre même sans réseau.
2. Prénom, puis − / + (ou touche le chiffre pour taper une valeur). Chaque tap est enregistré sur le téléphone, même si l'appli se ferme ou se recharge.
3. **Récap →** puis **Envoyer l'inventaire**. Avec du réseau, il part tout de suite dans le tableau et par mail. Sans réseau (chambre froide), il attend et part tout seul dès que le téléphone retrouve du réseau : tu peux fermer l'appli.

## Modifier la liste des produits
- Dans l'appli : crayon en haut à droite + code responsable. Renommer, unité, pas du bouton +, choix, avertissement, ajouter / supprimer, glisser-déposer avec ≡. En quittant le mode modification, la liste est envoyée au tableau et tous les téléphones la récupèrent à leur prochaine ouverture en ligne.
- Ou dans le tableau, onglet `produits` : une ligne par produit. `type` = `qty` ou `choice`, `choix` séparés par `|`, `actif` = FALSE pour cacher un produit, `ordre_categorie` / `ordre` pour l'ordre. Ne pas toucher à `id`.

## Réglages (onglet `config`)
`emails` (destinataires du récap, séparés par des virgules), `pin` (code responsable), `site`. Ne pas renommer les onglets ni les en-têtes.

## Où arrivent les inventaires
- `inventaires` : une ligne par inventaire, avec le récap complet.
- `lignes` : une ligne par produit et par inventaire (filtres, tableaux croisés).
- Mail récap aux adresses de `config`, envoyé depuis le compte Gmail d'Etienne.

## Mise en service (déjà faite) et maintenance
1. Sheet > Extensions > Apps Script, coller `Code.gs`, exécuter `setup`, autoriser.
2. Déployer > Nouveau déploiement > Application web (Exécuter en tant que : Moi ; Accès : Tout le monde). Copier l'URL `/exec` dans `index.html`, constante `API_URL`.
3. Après une modification de `Code.gs` : Déployer > Gérer les déploiements > crayon > Nouvelle version. L'URL ne change pas.
