# Cora Full-Stack Framework

## Requirements

- NodeJS 12.x.x
- Yarn

## Preparation

### Create `.env` file in the `apps/cora` folder:

```
GENERATE_SOURCEMAP=false
CI=true
```

### Install dependencies

```
yarn install
yarn bootstrap
```

## Run dev environment (for local development purposses)

```
yarn dev
```

## Commands

`yarn start` - start the application in production

`yarn dev` - start local dev environment

`yarn bootstrap` - run installation of dependencies in applications

`yarn clean` - remove `node_modules` in applications

`yarn test` - run tests for applications
