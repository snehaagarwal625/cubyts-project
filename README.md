<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## About this application

```bash
# ONE API which will provide a solution for all the problem statements mentioned below.
1. Problem statement 1: Odd vs. even: 
  1. Input: 1, 4, 2, 3, 3, 9, 1,7, 8, 5 
  2. Expected output: 2, 4, 8, 9, 1, 1, 3, 3, 5, 7 
  3. Expected logic: Display the even numbers in ascendind followed by the odd numbers, displayed in ascending order. 
2. Problem statement 2: Playing with Os and 1s: 
  1. Input: 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0 , 0, 1, 1, 1, 0, 1, 1, 1, 0, 0 
  2. Expected output: 0, 1, 1, 0, 1, 1, 1 0, 0, 1, 1, 1, 1, 1, 1, 0. 
  3. Expected logic: If there are two consecutive zeros then display only one zero, display all the zeros (after shrinking) followed by the ones 
3. Problem statement 3: An interesting sort. 
  1. Input: 1, 0, 0, 11, 9, 0, 0, 0, 28, 0, 0, 0, 7, 1, 2, 78, 0, 0. 
  2. Expected output: 1, 1, 2, 7, 9, 11, 28, 78, 0, 0, 0, 0, 0. 0, 0, 0, 0, 0. 
  3. Expected logic: Display the sorted non-zero numbers in ascending order followed by all the zeros. 
4. Problem statement 4: Binay form & Palindrome or not. 
  1. Input: 73 
  2. Expected output: 1001001, Yes 
  3. Expected logic: Print the binary form of a number and discover whether the binary number is a palindrome or not. 

```