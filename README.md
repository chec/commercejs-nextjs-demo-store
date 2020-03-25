# Example Store with Commerce.js and Next.js 

A high-fidelity fully-fledged eCommerce store built using Commerce.js and Next.js (an SSR frameworked based on React)

Checkout the live demo [here]()

- This app is built using Commerce.js v2 SDK

## Overview

This tutorial is meant to showcase a real-world example store application while abtracting all layers that are not part of the eCommerce logic flow. We will be focusing on the initial setup and more importantly on injecting this Next.js app with Commerce.js. 

Why is Next.js an ideal framework for Commerce.js?

<!-- There are quite a few core features that makes Next.js an ideal framework to pair with Commerce.js. 

Next.js makes it easy to setup an eCommerce app -->

## Requirements/Prequisites


## Setup

1. Set up a Chec account [here]() and upload the neccessary data to power your store.

2. Start by creating a new Next.js project with manual setup. Alternatively, if you want to clone this repo and hit the ground running with a boilerplate, skip to step 3. To set up your app manually, create a folder and `cd` into it.

```bash
mkdir example-checkout-hifi
cd example-checkout-hifi
```

Initialize your project as a Node project
```bash
npm init
#or 
yarn init
```

Now install the necessary framework dependencies 
```bash
npm install next react react-dom
#or
yarn add next react react-dom
```

There is now a package.json which displays the installed dependencies and scripts. Replace the scripts section with the below content which will allow us to use NextJS commands to run our app.

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

3. Directly clone the repo and get setup with a fully-fledged Chec store.

```bash
git clone https://github.com/chec/example-checkout-hifi.git
cd example-checkout-hifi
```

Install dependencies included in `package.json` then run app in local development mode.
```bash
npm install or yarn 
npm run dev or yarn dev
```

## Getting Started

1. Install the Commerce.js SDK.

```bash
npm install @chec/commerce.js
#or
yarn add @chec/commerce.js
```

2. Create a `.env` 'dot file' at your project root to store your Chec `public_key`. 

```
COMMERCE_PUBLIC_KEY=your_public_API_key_here
```

This file is meant to not be committed to source control and also will be hidden in file browsers.

3. Set up configuration

Create a `next.config.js`

```
...
```

Create a `/lib` folder at the root of your project with a `commerce.js` file. This allow us to consume our Chec API key stored in the environment variable. Creating a separate file to abstract our application functions into an easily to be easily accessible so that we can to continue to add more logic as our application grows. There are other means and alternatives like injecting the Commerce.js object into individual components where needed but this method will become unmanageable when we scale. 

## Build and Deploy

```bash
npm build or yarn build
npm start or yarn start
```