# Rose Garden

This is the Rose Garden kata in TypeScript.

## Overview
The aim of this project is to allow management of items. To test adding new items, include the item in the `items` in the file `golden-master-text-test.ts`

To allow for a new item which requires a different update quality criteria, it should be added to the `enum ItemList` in the file `rose-garden.ts`

## Tasks List
[x] ~~Updated Jest Test Cases~~

[x] ~~Refactored the UpdateQuality Method~~

[x] Update the Mocha Test Cases


## Getting started

Install dependencies

```sh
npm install
```

## Running app
_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

## Running tests

To run all tests

### Jest way

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

### Mocha way

```sh
npm run test:mocha
```
