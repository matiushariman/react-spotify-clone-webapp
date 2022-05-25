[![codecov](https://codecov.io/gh/matiushariman/react-spotify-clone-webapp/branch/main/graph/badge.svg?token=H8G6PIBHIG)](https://codecov.io/gh/matiushariman/react-spotify-clone-webapp)

## Getting Started

Web application built with ReactJS (Typescript) for viewing personalized Spotify data (powered by Spotify Web API).

### Pre-requisite(s)

- [node@10 or above](https://nodejs.org/en/)
- [yarn v1.0 or above](https://yarnpkg.com/)

### Spotify App Setup (Important)

1. Using your Spotify account, log in to Spotify and go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
2. Click create an app and follow the instructions.
3. Once your app is created, click on your app on the dashboard page and then take note of the CLIENT_ID.
4. Click on Users and Access located at top right corner, and add your test account(s).

### Installation

Install dependencies

```sh
  yarn install
```

### Running the project

1. Create a .env.local file in the root containing this information:
   ```bash
   # primary env for local development
   ESLINT_NO_DEV_ERRORS=true
   # redirect URI should be http://localhost:3000/ by default
   REACT_APP_REDIRECT_URI=[YOUR_REDIRECT_URI]
   REACT_APP_CLIENT_ID=[YOUR_SPOTIFY_APP_CLIENT_ID]
   # use mock API?
   REACT_APP_ENABLE_MOCK=false
   ```
2. Run the project using this command:

```sh
  yarn start
```

### Building the project

To get the production build, run

```sh
  yarn build:{environment}
```

_NOTE: Running the command above will generate a build folder in the root that contains a production ready build._

### Running the test

There are 2 types of test that we can run:

1. Unit/Integration Test
   Powered by [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) which is also current industry standard for testing react component.
   To run the test, run
   ```sh
    yarn test
   ```
2. E2E Test
   Powered by cypress.
   To run the test in a browser, run

   ```sh
     yarn cy:open
   ```

   To run the test in a terminal, run

   ```sh
     yarn cy:run
   ```

### Additional Documentation

- [Git Hooks](docs/general/git-hooks.md)
- [How to \*](docs/how-to/README.md)
- [Testing](docs/testing/README.md)

## Contact

- matius.hariman@gmail.com
