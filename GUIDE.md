# Inventaire Bacalan — mode d'emploi

## Les liens

- **Appli** : https://lewayowayo.github.io/inventaire-bacalan/
- **Tableau (Google Sheet « Inventaire Bacalan »)** : https://docs.google.com/spreadsheets/d/1mkh_Zt24DWUaRzs-WRYklaWGvnhVb72dZF4aeauuV5o/edit
- **Code responsable** (pour modifier la liste depuis l'appli) : demande-le à Etienne ; il se change dans le tableau (voir Réglages).

## Installer l'appli sur un téléphone

1. Ouvre le lien de l'appli une première fois **avec du réseau**.
2. Ajoute-la à l'écran d'accueil : iPhone / Safari → bouton Partager → « Sur l'écran d'accueil » ; Android / Chrome → menu ⋮ → « Ajouter à l'écran d'accueil ».
3. C'est tout. À partir de là, l'appli s'ouvre même sans réseau (chambre froide comprise) et garde tout ce qu'on tape sur le téléphone.

Pas de compte, pas de mot de passe : n'importe qui avec le lien peut faire un inventaire. Seule la modification de la liste des produits demande le code responsable.

## Faire l'inventaire (le dimanche midi)

1. Mets ton prénom en haut.
2. Compte avec **−** / **+**. Le pas est réglé par produit (par 1, par 0,5 pour le Canadou, par 5 pour l'huile en litres…). Touche le chiffre pour taper une valeur exacte au clavier. Les questions « torchons / lavettes / fonds de caisse » sont des boutons : Pas besoin · Oui, bientôt · Oui, URGENT.
3. Les puces en haut (Boissons 3/12, Épicerie 0/19…) servent à sauter d'une catégorie à l'autre et montrent ce qui reste à compter. Un produit compté passe en vert.
4. **Récap →** : l'appli liste les produits oubliés (tu peux revenir corriger ou envoyer quand même, ils apparaîtront avec un « ? »), puis **Envoyer l'inventaire** (deux taps pour confirmer).
5. Avec du réseau, il part immédiatement : une ligne dans le tableau + un mail à contact@wayowayo.fr et clementdescol@hotmail.com. **Sans réseau**, l'écran affiche « En attente de réseau » : tu peux fermer l'appli, il partira tout seul dès que le téléphone retrouve du réseau (à l'ouverture suivante, ou dans les 30 secondes si l'appli est ouverte).

Chaque tap est sauvegardé instantanément sur le téléphone. Si l'appli se recharge ou se ferme en pleine chambre froide, on la rouvre et tout est là.

**Bon à savoir**
- L'inventaire est lié au téléphone : on ne peut pas commencer sur un téléphone et finir sur un autre.
- « Historique sur ce téléphone » (après l'envoi) garde les 30 derniers récaps avec un bouton Copier, au cas où.
- Le bouton « Copier le texte » du récap existe toujours : utile pour coller dans WhatsApp si jamais le tableau est en panne.

## Modifier la liste des produits

### Depuis l'appli (le plus simple)

1. Crayon en haut à droite → code responsable (il faut du réseau).
2. Sur chaque produit, le crayon ✎ ouvre la fiche : **nom**, **unité / conditionnement** (le texte affiché sous le nom : « pack de 24 », « bidon 5 L », « en litres »…), **type de réponse** (Quantité − / + avec son **pas**, ou Choix dans une liste avec les choix un par ligne), **avertissement** (le bandeau orange, ex. « Ne pas recommander, voir avec Gambetta »). Bouton Supprimer en bas de la fiche (à confirmer).
3. **≡** à gauche : glisser-déposer pour réordonner les produits, y compris d'une catégorie à une autre. Le ≡ à côté d'un titre de catégorie déplace toute la catégorie.
4. « + Ajouter un produit ici » sous chaque catégorie, « + Ajouter une catégorie » en bas. Le crayon à côté d'un titre de catégorie la renomme, change sa consigne (le bandeau « Attention à bien remplir le frigo avant ! ») ou la supprime.
5. Quitte le mode modification (re-crayon) : la liste est envoyée au tableau (« Liste enregistrée pour tout le monde ✓ »). Les autres téléphones la récupèrent à leur prochaine ouverture avec du réseau.

Si tu quittes le mode modification sans réseau, la liste reste sur ton téléphone et sera envoyée au prochain passage en ligne.

### Directement dans le tableau (onglet `produits`)

Une ligne par produit. Colonnes :

| Colonne | Rôle |
|---|---|
| `id` | Identifiant technique, ne pas modifier (sert à relier les inventaires aux produits). |
| `categorie` | Nom de la catégorie, exactement le même texte pour tous les produits de la catégorie. |
| `ordre_categorie` | Numéro d'ordre de la catégorie (1 = affichée en premier). |
| `consigne_categorie` | Bandeau affiché sous le titre de la catégorie ; à remplir sur une seule ligne de la catégorie. |
| `produit`, `unite` | Nom et texte affiché dessous. |
| `type` | `qty` (compteur − / +) ou `choice` (boutons). |
| `pas` | Pour `qty` : 1, 0,5, 2, 5… |
| `choix` | Pour `choice` : les options séparées par `\|` (ex. `Pas besoin\|Oui, bientôt\|Oui, URGENT`). |
| `avertissement` | Bandeau orange sur le produit. |
| `actif` | `FALSE` pour cacher un produit sans le supprimer (son historique reste). |
| `ordre` | Ordre dans la catégorie. |

Pour ajouter un produit à la main : nouvelle ligne avec un `id` unique (ex. `p081`). Les téléphones récupèrent le changement à leur prochaine ouverture. Attention : si quelqu'un enregistre ensuite la liste depuis l'appli, c'est la version de l'appli qui écrase l'onglet.

## Réglages (onglet `config`)

- `emails` : les adresses qui reçoivent le récap, séparées par des virgules.
- `pin` : le code responsable (chiffres ou lettres, sans espace).
- `site` : nom affiché dans les mails.
- `rev` : technique, laisse-le.

Ne renomme ni les onglets ni les en-têtes de colonnes : le script s'en sert.

## Où arrivent les inventaires

- Onglet `inventaires` : une ligne par inventaire (date, prénom, commentaire, nombre de produits comptés, récap complet en texte).
- Onglet `lignes` : une ligne par produit et par inventaire (date, catégorie, produit, unité, valeur). C'est l'onglet à utiliser pour suivre un produit dans le temps : filtre sur `produit`, ou Données → Tableau croisé dynamique (lignes = produit, colonnes = date, valeurs = valeur).
- Le mail : objet « Inventaire Bacalan 22/09/2026 — Clément (78/80) », le récap dans le corps, le lien du tableau en bas. Il part de l'adresse Gmail d'Etienne (c'est son compte qui fait tourner le script).

## En cas de problème

- **« En attente de réseau » qui ne part pas** : ouvre l'appli avec du réseau et touche « Réessayer ». S'il y a un message d'erreur sous le statut, envoie-le à Etienne ; en attendant, « Copier le texte » et WhatsApp.
- **Un produit modifié n'apparaît pas sur un téléphone** : rouvrir l'appli avec du réseau (elle vérifie la liste à chaque ouverture en ligne).
- **Code responsable refusé** : c'est la valeur de `pin` dans l'onglet `config`. Il faut du réseau pour le vérifier.
- **Le mail n'arrive pas mais la ligne est dans le tableau** : vérifie les spams et l'orthographe des adresses dans `config`. Google limite à ~100 mails par jour, largement suffisant.
- **Réinstaller / changer de téléphone** : rien à faire, tout est dans le tableau ; seul l'historique local du téléphone n'est pas transféré.
- **Après une modification du script** (Extensions → Apps Script depuis le tableau) : Déployer → Gérer les déploiements → crayon → Nouvelle version → Déployer. L'adresse ne change pas. Si Google redemande des autorisations, les accepter avec le compte d'Etienne.

## Comment c'est fait (pour la curiosité)

- L'appli est une page web hébergée gratuitement sur GitHub Pages, installable comme une appli (PWA) avec un cache hors ligne.
- Elle parle à un petit script Google Apps Script attaché au tableau, qui écrit les lignes et envoie le mail. Aucun serveur, aucun abonnement.
- Les inventaires envoyés sans réseau sont mis en file d'attente sur le téléphone ; un identifiant unique évite les doublons si un envoi est retenté.

## Mise en service (déjà faite) et maintenance

1. Sheet → Extensions → Apps Script, coller `Code.gs`, exécuter `setup`, autoriser.
2. Déployer → Nouveau déploiement → Application web (Exécuter en tant que : Moi ; Accès : Tout le monde). Copier l'URL `/exec` dans `index.html`, constante `API_URL`.
3. Après une modification de `Code.gs` : Déployer → Gérer les déploiements → crayon → Nouvelle version. L'URL ne change pas.
