# Example Store with Commerce.js and Next.js 

A high-fidelity fully-fledged eCommerce store built using the Commerce.js SDK and Next.js (an SSR frameworked based on React).

Checkout the live demo [here]()

**Note**
- This app is built using Commerce.js v2 SDK

## Overview

This README will guide you in getting up and running with a fully-fledged eCommerce boilerplate. There are two ways to get set up: 1) Automatic live deploy a copy of the application via Netlify 2) Manual setup and deployment process. In this option, we will be focusing on the initial setup, injecting your Next.js app with Commerce.js and lastly wrap up with deployment steps. For a full detailed tutorial on building this JAMstack eCommerce application, please head on over [here]().

## Prequisites

- IDE of your choice (code editor)
- NodeJS or Yarn → npm or yarn

## Deploy to Netlify 

*Explanation of Netlify deployment process here*

*Deploy to Netlify button here*
[Deploy to Netlify]

## Setup

1. Set up a Chec account [here]() and upload the neccessary data to power your store.

2. Start by creating a new Next.js project with manual setup. Alternatively, if you want to clone this repo and hit the ground running with a boilerplate, skip to step 3. To set up your app manually, create a folder and `cd` into it.

```bash
mkdir your-project-name
cd your-project-name
```

a) Initialize your project as a Node project
```bash
npm init -y
#or 
yarn init -y
```

b) Install the necessary framework dependencies and the Commerce.js SDK
```bash
npm install --save next react react-dom @chec/commerce.js
#or
yarn add --save next react react-dom @chec/commerce.js
```

There is now a `package.json` which displays the installed dependencies and scripts. Replace the scripts section with the below content which will allow us to use Next.js commands to run and build our app.
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

Install dependencies included in `package.json` then run your development server.
```bash
npm install
#or
yarn

npm run dev
#or
yarn dev
```

## Getting Started

1. Create a `.env` 'dot file' at your project root to store your Chec `public_key`. 

```
COMMERCE_PUBLIC_KEY=your_public_API_key_here
```

This file is meant to not be committed to source control and also will be hidden in file browsers.

2. Create custom configs for Next.js

Create a `next.config.js` and copy the below code

```js
require('dotenv').config();
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* config options here */
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  env: {
    'COMMERCEJS_PUBLIC_KEY': process.env.COMMERCEJS_PUBLIC_KEY
  }
})
```

3. Consume Commerce.js

Create a `/lib` folder at the root of your project with a `commerce.js` file. This allow us to consume our Chec API key stored in the environment variable. Creating a separate file to abstract our application functions into an easily to be easily accessible so that we can to continue to add more logic as our application grows. There are other means and alternatives like injecting the Commerce.js object into individual components where needed but this method will become unmanageable when we scale. 

## Deployment

### Netlify (recommended)

### Manual hosting options

```bash
npm build or yarn build
npm start or yarn start
```