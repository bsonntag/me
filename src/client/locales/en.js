// @flow

import { externalLink } from './utils';

const name = 'Benjamim Sonntag';

export default {
  blogPost: {
    comments: {
      title: 'Comments',
    },
    share: 'Share this on:',
  },
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
    projects: {
      items: {
        badgeUpCli: {
          description: 'Create badges from the terminal.',
        },
        me: {
          description: 'My personal website (this one).',
        },
        npmNotifier: {
          description: 'Desktop application for receiving notifications when new versions are released for your favourite modules.',
        },
        reactRemarkbox: {
          description: 'React component for Remarkbox.',
        },
        stopMediaStream: {
          description: 'Little module to stop and remove all tracks in a MediaStream.',
        },
      },
      title: 'Personal Projects & Modules',
      wip: '(Work in progress)',
    },
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
};
