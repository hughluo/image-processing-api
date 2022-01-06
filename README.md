# Image Processing API

## Usage
1. Run `npm install` to install dependencies.
2. Run `npm run build` to transcompile the code Typescript to Javascript. For configuration, see [tsconfig.json](./tsconfig.json). For linting, see [.eslintrc.json](./.eslintrc.json)
3. Run `node ./dist/` to run the server.
4. Put an image in `assets` folder and then call the url to resize the image. An example image `parrot.jpeg` is already put there, to resize it to 300 * 300, visit http://localhost:3000/api/images?filename=parrot.jpeg&width=300&height=300

## Develop
1. Run `npm install` to install dependencies.
2. Run `npm start` to start dev server by taking the advantage of the auto-reloading feature of [`nodemon`](https://www.npmjs.com/package/nodemon).

## Pre-commit
The following npm command will be executed before git commit. This is controlled by npm package [`pre-commit`](https://www.npmjs.com/package/pre-commit).
* Run `npm prettier` to format the code. For configuration, see[.prettierrc.json](./.prettierrc.json).
* Run `npm test` to run tests powered by [`Jasmine`](https://www.npmjs.com/package/jasmine). For configuration, see [jasmine.json](./spec/support/jasmine.json). For reporter configuration, see [reporter.ts](./src/tests/helpers/reporter.ts).
