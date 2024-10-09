import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

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
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        // {
        //     emoji: '☕',
        //     text: 'fueled by coffee'
        // },
        {
            emoji: '🌎',
            text: 'basé en Alsace'
        },
        {
            emoji: "💼",
            text: "en formation openclassroom"
        },
        {
            emoji: "📧",
            text: "cakmakciselin@gmail.com"
        }
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
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/selin-cesur-647215181/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
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
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'html', 'css', 'figma'],
        exposedTo: ['nodejs']
    }
    ,
    hobbies: [
        {
            label: 'lectures',
            emoji: '📖'
        },
        {
            label: 'films',
            emoji: '🎥'
        },
        {
            label: 'cuisine',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Projet 2 - Booki",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Projet 3 - Sophie Buel",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Projet 4 - Nina Corducci",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Projet 5 - Kasa",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Projet 6 - Mon vieux Grimoire",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        },
        {
            title: "Projet 7 - Menu Maker by Qwenta",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        },
        {
            title: "Projet 8 - Mon portfolio",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        },
    ]
}