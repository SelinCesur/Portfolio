import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(131,108,245)", "rgb(245,108,206)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Selin",
  lastName: "Cesur",
  initials: "sc", // the example uses first and last, but feel free to use three or more if you like.
  position: "je suis développeuse",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    // {
    //     emoji: '☕',
    //     text: 'fueled by coffee'
    // },
    {
      emoji: "🌎",
      text: "basé en Alsace",
    },
    {
      emoji: "💼",
      text: "en formation openclassroom",
    },
    {
      emoji: "📧",
      text: "cakmakciselin@gmail.com",
    },
  ],
  socials: [
    // {
    //     link: "https://facebook.com",
    //     icon: 'fa fa-facebook',
    //     label: 'facebook'
    // },
    // {
    //     link: "https://instagram.com",
    //     icon: 'fa fa-instagram',
    //     label: 'instagram'
    // },
    {
      link: "https://github.com/SelinCesur",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/selin-cesur-647215181/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //     link: "https://twitter.com",
    //     icon: "fa fa-twitter",
    //     label: 'twitter'
    // }
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Bonjour ! Je m'appelle Selin et je suis étudiante en développement web à OpenClassrooms. Passionnée par les technologies JavaScript, je me consacre à acquérir des compétences solides dans ce domaine dynamique. Actuellement, je suis à la recherche d'une opportunité professionnelle qui me permettra de mettre en pratique mes connaissances et de contribuer à des projets innovants. Découvrez mon portfolio pour explorer mes réalisations du développement web.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "html",
      "css",
      "figma",
    ],
    exposedTo: ["nodejs"],
  },
  hobbies: [
    {
      label: "lectures",
      emoji: "📖",
    },
    {
      label: "films",
      emoji: "🎥",
    },
    {
      label: "cuisine",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Projet 2 - Booki",
      source: "https://github.com/SelinCesur/booki-starter-code", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
      description:
        " Dans ce projet, j’ai appris  à créer une page d'accueil pour une agence de voyage en utilisant HTML et CSS. J’ai intégrer l'interface responsive du site en suivant des maquettes Figma et en écrivant mon propre code. J’ai  découper la maquette, ajouter le header, le formulaire de recherche, les cartes d'hébergements et activités, les filtres, une carte d'hébergement spécifique, et le footer. J’ai  vérifier la compatibilité sur tous les écrans et la qualité de mon code avec les standards du W3C. Ce projet m’a permis de développer des compétences en front-end et d'offrir une expérience utilisateur optimale sur différents appareils.",
      problematique:
        "Pour la création de cette page d'accueil pour une agence de voyage en utilisant HTML et CSS, la problématique que j’ai rencontré c’est de mettre en place une  interface responsive et une expérience utilisateur optimale sur différents appareils. Pour surmonter cette problématique , J’ai utilisé les médias queries , conçu un design fluide, testé sur différents appareils, optimisé les images et priorisé les information importantes.",
      competences: "HTML, CSS, Figma, Github, Git",
    },
    {
      title: "Projet 3 - Sophie Bluel",
      source: "https://github.com/SelinCesur/Portfolio-architecte-sophie-bluel",
      image: mock2,
      description:
        "Dans ce projet, je vais créer une page web pour une architecte d'intérieur en utilisant JavaScript et en interagissant avec une API. Je vais développer la partie Front-End du site, en ajoutant des fonctionnalités comme une galerie dynamique pour présenter les projets et en mettant en place un système de filtres pour trier les projets par catégorie. Je vais également créer une page de connexion sécurisée pour l'administrateur du site, et une modale pour ajouter et supprimer des projets sans avoir à recharger la page. Enfin, je vérifierai tous les aspects du projet pour m'assurer que tout fonctionne correctement avant de le présenter. C'est un projet très complet qui me permettra de développer mes compétences en JavaScript et en manipulation de l'API.",
      problematique:
        "Pendant ce projet  la problématique que j’ai rencontré c’ est la récupération et la manipulation des données depuis l'API pour afficher la galerie de projets.La solution adaptée était d'utiliser des requêtes AJAX pour interagir avec l'API et récupérer les données nécessaires.J’ai ensuite manipulé et afficher ces données en utilisant la manipulation du DOM avec JavaScript puis créer des éléments HTML dynamiquement et les remplir avec les informations des projets, en utilisant des boucles et des fonctions de traitement des données. Pour rendre la galerie interactive, j’ai également mis en place un système de filtres en écoutant les événements de l'utilisateur (par exemple, lorsqu'il clique sur une catégorie) et en ajustant dynamiquement les éléments affichés en fonction des filtres sélectionnés. En utilisant ces techniques,je suis en mesure de récupérer les données depuis l'API et de créer une galerie dynamique et interactive pour présenter les projets de l'architecte d'intérieur.",
      competences: "JavaScript, HTML, CSS, Figma, API, Github, Git",
    },
    {
      title: "Projet 4 - Nina Corducci",
      live: "https://selincesur.github.io/Nina-Carducci-Dev/",
      source: "https://github.com/SelinCesur/Nina-Carducci-Dev",
      image: mock3,
    },
    {
      title: "Projet 5 - Kasa",
      source: "https://github.com/SelinCesur/Projet5Kasa",
      image: mock4,
    },
    {
      title: "Projet 6 - Mon vieux Grimoire",
      source: "https://github.com/SelinCesur/P7-Dev-Web-livres/",
      image: mock5,
    },
    {
      title: "Projet 7 - Menu Maker by Qwenta",
      source:
        "https://wonderful-equipment-a0c.notion.site/8867ce8c18f04a8d9f789c2565cf8b09?v=18b4dc7fb57d4366b5a29746a7b72347&pvs=4",
      image: mock6,
    },
    {
      title: "Projet 8 - Mon portfolio",
      live: "https://selincesur.github.io/Portfolio/",
      source: "https://github.com/SelinCesur/Portfolio",
      image: mock7,
    },
  ],
};
