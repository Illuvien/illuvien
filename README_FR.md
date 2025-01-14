# IlluVien - Éditeur graphique basé sur des graphes pour les flux de travail LLM

<p align="center">
  <a href="./README.md"><img alt="README en anglais" src="https://img.shields.io/badge/English-blue"></a>
  <a href="./README_CN.md"><img alt="README en chinois simplifié" src="https://img.shields.io/badge/简体中文-blue"></a>
  <a href="./README_JA.md"><img alt="README en japonais" src="https://img.shields.io/badge/日本語-blue"></a>
  <a href="./README_KR.md"><img alt="README en coréen" src="https://img.shields.io/badge/한국어-blue"></a>
  <a href="./README_DE.md"><img alt="README en allemand" src="https://img.shields.io/badge/Deutsch-blue"></a>
  <a href="./README_FR.md"><img alt="Version française du README" src="https://img.shields.io/badge/Français-blue"></a>
  <a href="./README_ES.md"><img alt="README en espagnol" src="https://img.shields.io/badge/Español-blue"></a>
</p>

![](/assets/Hero.gif)

#

# ✨ Principaux avantages

## Blocs de construction modulaires

![](/assets/Blocks.gif)

## Débogage au niveau des nœuds

![](/assets/Visualization.gif)

## Évaluer la performance finale

![](/assets/evals.gif)

## Bientôt disponible : auto-amélioration

![](/assets/Optimization.gif)

# 🕸️ Pourquoi IlluVien ?

* **Facile à modifier**, par exemple on peut ajouter de nouveaux nœuds de flux de travail en créant simplement un fichier Python.
* **Configurations JSON** des graphes de flux, permettant un partage et un contrôle de version aisés.
* **Léger** avec un minimum de dépendances, évitant les frameworks LLM trop lourds.

# ⚡ Démarrage rapide

Vous pouvez démarrer IlluVien en trois étapes simples :

1. **Cloner le dépôt :**
    ```sh
    git clone https://github.com/Illuvien/illuvien.git
    cd IlluVien
    ```

2. **Démarrez les services Docker :**

    ```sh
    sudo docker compose up --build -d
    ```

    Cela lancera une instance locale de IlluVien qui stockera les spurs et leurs exécutions dans un fichier SQLite local.

3. **Accédez au portail :**

    Rendez-vous sur `http://localhost:6080/` dans votre navigateur.

    Entrez `IlluVien`/`canaryhattan` comme nom d'utilisateur/mot de passe.

4. **Ajoutez les clés de votre fournisseur de LLM :**

   Allez dans le menu des paramètres en haut à droite du portail

   <img width="1913" alt="image" src="https://github.com/user-attachments/assets/32fe79f1-f518-4df5-859c-1d1c0fc0570e" />

   Sélectionnez l'onglet "API keys"

   <img width="441" alt="image" src="https://github.com/user-attachments/assets/cccc7e27-c10b-4f3a-b818-3b65c55f4170" />

   Entrez la clé de votre fournisseur et cliquez sur "save" (le bouton "save" apparaîtra après l'ajout/modification d'une clé)

La configuration est terminée. Cliquez sur "New Spur" pour créer un nouveau flux de travail, ou commencez avec l'un des modèles existants.

# 🗺️ Feuille de route

- [X] Canvas (toile)
- [X] Exécution asynchrone/lot (Async/Batch)
- [X] Évaluations (Evals)
- [X] Spur API
- [ ] Nouveaux nœuds
    - [X] Nœuds LLM
    - [X] Si-Sinon (If-Else)
    - [X] Fusionner les branches (Merge Branches)
    - [ ] Outils (Tools)
    - [ ] Boucles (Loops)
- [ ] Optimisation du pipeline via DSPy et méthodes associées
- [ ] Modèles (Templates)
- [ ] Compiler les Spurs en code
- [ ] Support multimodal
- [ ] Conteneurisation des vérificateurs de code
- [ ] Tableau de classement (Leaderboard)
- [ ] Générer des Spurs via l'IA

Vos retours sont grandement appréciés.  
Veuillez [nous dire](mailto:founders@IlluVien.dev?subject=Feature%20Request&body=I%20want%20this%20feature%3Ai) quelles fonctionnalités de cette liste vous souhaitez voir apparaître en priorité, ou proposez-en de totalement nouvelles.
