# React-Redux-Saga Seed
A really basic and simple seed project that can be used to start new React Redux project.
Basic structure is generated from https://github.com/facebookincubator/create-react-app

### Project Basic Structure
The project tries to use folder structure as suggested by https://github.com/erikras/ducks-modular-redux.

Under `src/` folder:
* `containers`: views and layouts components.
* `state`: modules and middlewares.
  * `modules`: each of the module inside here contains reducers, actions, sagas (operations) and test, basically all redux related files. Module is grouped by one concept only, e.g. Session, Product etc.
  * `middlewares`: any middleware configuration goes here.
  * `store.js`: this is the main file that contains the function to configure a new redux store, configuring reducers, middlewares, routing etc.

### Setup
Check out the project and `cd` into the project folder. Run `yarn install`.

### Run Seed
`yarn run dev`

### Run Test
`yarn run test`
Note that `scripts/test.js` checks a `process.env.CI` ENV , if it is ture, the test will not run `--watch` mode, otherwise in dev the test is run as watch mode by `Jest`.

### Run Build
`yarn run build` produces a `/build` folder that can be served.

### Build Scripts
Under `scripts/`, there are `build.js`, `dev.js` and `test.js`. They are used in `package.json` as npm scripts.
