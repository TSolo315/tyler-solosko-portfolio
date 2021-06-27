import { nanoid } from 'nanoid';

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Does this work',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'asmrvideodb.png',
    title: 'ASMRVIDEODB',
    info: "A website displaying ASMR videos collected using Google's Youtube API and stored in a custom database along with video specific user generated data. This site allows users to better find and track videos that match their interests.",
    info2: 'Built With: HTML5, react.js, django rest framework, SASS, ant design.',
    url: 'https://www.asmrvideodb.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'achievefamilytherapyneurofeedback.png',
    title: 'Achieve Family Therapy Neurofeedback',
    info: "A single page website for Achieve Family Therapy's neurofeedback program.",
    info2: 'Built With: HTML5, SASS, Javascript, jQuery',
    url: 'https://www.neurofeedback.achievefamilytherapy.com/',
    repo: 'https://github.com/TSolo315/Achieve-Family-Therapy-Neurofeedback', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mturkguide.png',
    title: 'Mturk Guide',
    info: "An informational website instructing visitors on how to better make money from home on Amazon's Mechanical Turk.",
    info2: 'Built With: HTML5, Javascript, SASS, Bulma.',
    url: 'https://www.mturkguide.com',
    repo: 'https://github.com/TSolo315/Mturk-Guide', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
