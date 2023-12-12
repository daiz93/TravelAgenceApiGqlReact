# Travel Agence Api Graphql React
Gestion Agence de Voyage ASP .Net Core API + Graphql + React, Appolo Client

# Solutions Possibles 


**Option 1 : Un projet API, un dossier GraphQL, plusieurs fichiers de requêtes et mutations**

C'est la solution la plus simple pour les petits projets. Votre dossier de requêtes aura un fichier de requête de base Query.cs et le reliera à plusieurs fichiers de requêtes pour chaque section comme CustomerQuery.cs et OrderQuery.cs, ainsi que plusieurs fichiers de mutations. Chaque équipe peut travailler avec son propre fichier de requête et de mutation et définir les autorisations en conséquence. Mais elles partageront le gros fichier GraphQL avec des restrictions d'accès si nécessaire.

**Option 2 : Un projet API, plusieurs dossiers GraphQL**

Allant plus loin que l'option 1. Vous aurez le projet API et le dossier GraphQL qui peut être divisé en plusieurs dossiers. Dans ce cas, vous aurez un dossier ClientGraphQl avec ses propres requêtes et mutations, et un dossier DossiersGraphQL avec ses propres requêtes et mutations. Chaque équipe peut accéder à ses propres fichiers et définir les autorisations en conséquence. Mais elles partageront le gros fichier GraphQL avec des restrictions d'accès si nécessaire.

**Option 3 : Multiples projets API**

C'est l'option souhaité. Chaque équipe aura un accès indépendant à ses propres projets API mais partagera le noyau et l'infrastructure. C'est bien pour les grands projets, mais la mise en place prendra du temps en raison de sa complexité. Chaque projet API aura alors son propre lien GraphQL.

Un exemple est ici : https://github.com/daiz93/detailVoyage

**Option 4 : Une solution pour chaque équipe**

C'est l'option la plus complexe et sera difficile à mettre en place. Chaque équipe aura sa propre solution avec son propre API et, si nécessaire, ses projets de noyau et d'infrastructure (ceux-ci peuvent même être partagés entre les solutions mais c'est difficile à mettre en place). Les équipes partageront une base de données commune mais auront un contrôle total sur l'architecture de leurs projets.



## Architecture : Option 1 

Vous trouvez donc un dossier Backend (Cotenant une API REST ASP .NET CORE et le dossier GraphQL) et un dossier Frontend (contenant une application react)

## Technologies Utilisées
- **Langages de Programmation:** ASP .NET CORE, Graphql, JS
- **Frameworks:** Entityfromaworkcore 7
- **Outils:** HotChocolate

## Installation :  Option 1, clone


1- Clenez le repositoire, et ouvrir le dossier avec Visual sutio code
2- Dans le terminale, rendez-vous dans Backend executez la commande '''dotnet restore'''
3- Dans Backend>TravelAPI  executer le commande '''dotnet watch run'''
4- Dans Fronten>Travelwebagency executez la commande yarn
5- Lancez le front end en executant yarn run strart


## Installation :  Option 2, Docker

Commande docker run --rm -it -p 8080:80 96119221/travelmanagementapp

## Utilisation



## Auteur
Desmond KPOHIZOUN
