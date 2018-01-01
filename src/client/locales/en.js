// @flow

import { externalLink } from './utils';

const name = 'Benjamim Sonntag';

export default {
  footer: {
    builtWith: 'Built with ',
    githubPages: 'GitHub Pages',
    hostedOn: ' and hosted on ',
    react: 'React',
  },
  home: {
    blog: {
      title: 'Blog',
    },
    heading: `Hello, I'm ${name}, a web developer`,
    whatIDo: {
      description: `
        I mostly do frontend work using React and Redux, but I also do some
        backend in Node and sometimes play around with Electron.
        <br>
        Ever since I learned JavaScript I've been using it for pretty much
        everything, from small scripts to full web applications.
      `,
      title: 'What I do',
    },
    work: {
      description: `
        I'm currently working at ${externalLink('Seegno', 'https://seegno.com')}
        doing some awesome stuff.
      `,
      title: 'Work',
    },
  },
  meta: {
    description: `The personal webpage of ${name}.`,
    siteName: 'bsonntag.me',
    title: name,
    twitterHandle: '@benjamimsonntag',
  },
  name,
  notFound: {
    go: 'You should probably go ',
    home: 'home.',
    title: 'How did you get here?',
  },
  share: 'Share this on:',
};
