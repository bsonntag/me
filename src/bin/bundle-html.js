/* eslint-disable no-console */
/* eslint-disable no-process-exit */

import { getPostList } from 'blog';
import { renderClient } from 'client';
import { renderToString } from 'react-dom/server';
import Bluebird from 'bluebird';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const writeFile = Bluebird.promisify(fs.writeFile);

const pages = [
  {
    fileName: 'index.html',
    path: '/',
  },
  {
    fileName: '404.html',
    path: '/404',
  },
  ...getPostList().reduce(
    (result, { id, url }) => [
      ...result,
      {
        fileName: `blog/${id}.html`,
        path: url,
      },
    ],
    []
  ),
];

const renderPage = page => {
  const html = `<!DOCTYPE html>${renderToString(renderClient(page.path))}`;

  return writeFile(`dist/${page.fileName}`, html);
};

Promise
  .all(pages.map(renderPage))
  .catch(error => {
    console.log(error);

    process.exit(1);
  });
