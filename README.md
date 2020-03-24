# Example Store with Commerce.js and Next.js 

A high-fidelity fully-fledged eCommerce store built using Commerce.js and Next.js (an SSR frameworked based on React)

Checkout the live demo [here]()

- This app is built using Commerce.js v2 SDK

## Overview

This tutorial is meant to showcase a real-world example store application while abtracting all layers that are not part of the eCommerce logic flow. We will be focusing on the initial setup and more importantly on injecting this Next.js app with Commerce.js. 

Why is Next.js an ideal framework for Commerce.js?

There are quite a few core features that makes Next.js an ideal framework to pair with Commerce.js. 

Next.js makes it easy to setup an eCommerce app

## Requirements/Prequisites


## Setup

1. Set up a Chec account [here]() and upload the neccessary data to power your store.

2. Clone this project to get started. 
```bash
git clone https://github.com/chec/example-checkout-hifi.git
npm install or yarn 
npm run dev or yarn dev
```

3. Create a `.env` at your project root with your Chec `public_key` 

```
COMMERCE_PUBLIC_KEY=
```

4. Install and run in development mode

```bash
npm install or yarn 
```
This will add the necessary dependencies currently in the project: `react` `react-dom` `next`

```bash
npm run dev or yarn dev
```
Run app in local host port 3000 and go to http://localhost:3000/ 

## Getting Started

1. Install the Commerce.js SDK and instantiate Commerce.js in a file

```bash
npm install @chec/commerce.js

*or* 

yarn add @chec/commerce.js
```

Create a `/lib` folder at the root of your project with a `commerce.js` file. This allow us to inject Commerce.js and abstract it to a separate and easily accessible file to continue to add our logic. There are other means and alternatives like injecting the Commerce.js object into individual components where needed, but as our app grows, this method will become unmanageable. 

5. Build and Deploy

```bash
npm build or yarn build
npm start or yarn start
```