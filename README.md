# My personal page

This is the source of my personal page: [bsonntag.me](http://bsonntag.me).

## Requirements

This project requires [Node](https://nodejs.org/en/download/) to be installed.
I also use [Yarn](https://yarnpkg.com/en/) to install dependencies instead of Npm,
but it's not required.

## Installation

Clone this repository and install the dependencies with `yarn install`.

## Development

A local server for development can be run with `yarn start`.

It will run on port 3000, so you can access it on http://localhost:3000.

## Deployment

To deploy the website I run `NODE_ENV=production yarn bundle`,
which will bundle the html and assets into a dist folder.

This folder is also a git repository which holds the `gh-pages` branch
of this repository (which I use as a staging server) and the `master` branch of
[bsonntag/bsonntag.github.io](https://github.com/bsonntag/bsonntag.github.io),
where my website is hosted.

## Contributing

Please feel free to submit any issues or pull requests.
