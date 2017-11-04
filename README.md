## angular2-seed

A simple starter project demonstrating the basic concepts of Angular 2.


### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script



### For angular upgrade from 4.0.1 to 4.4.6 and add material/animations package:
update package.json for -> 4.4.6 (for core and all others packages)
updated "webpack", "webpack-dev-server" for latest versions
added "@angular/animations": "^4.4.6", in package.json
npm upgrade @angular/core
npm i --save @angular/cdk
npm i --save @angular/material @angular/material
npm i --save hammerjs
npm outdated
npm update
