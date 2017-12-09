// @flow

import { externalLink } from './utils';

const name = 'Benjamim Sonntag';

export default {
  head: {
    title: name,
  },
  home: {
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
  name,
};
