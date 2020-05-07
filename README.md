# Example Store with Commerce.js and Next.js 

A high-fidelity fully-fledged eCommerce store built using the Commerce.js SDK and Next.js with live deployment to Netlify.

Checkout the live demo [here](https://commercejs-example-store.netlify.app)

**Note**
- This app is built using Commerce.js v2 SDK

## Overview

This README will guide you in getting up and running with a fully-fledged eCommerce template. We have configured this template for you to one-click deploy directly to Netlify. Alternatively, you can manually deploy to your choice of hosting platform.

For a full detailed tutorial on building this JAMstack eCommerce application, please head on over [here](tutorial-url).


## Prequisites

- IDE or code editor of your choice
- Node (v8.2.0 or higher)
- NPM or Yarn
- Chec CLI `yarn global add @chec/cli`

## Setup

1. Create a Chec account 

Now that you’ve installed Chec CLI globally, you will be able to access the list of `chec [COMMANDS]`, one of which is registering for a Chec account. Let’s go ahead and get that set up!

```bash
# Open the Chec registration page in your browser
chec register
```

Follow the rest of the walk-through to set up your merchant details. Alternatively, you can go here to register for a Chec account. 


2. Upload the data necessary to power your Chec store

You can optionally skip the following steps for now, until after the deployment. Otherwise, start with uploading the below data: 


a) Shipping zone (at least one)

- Sign into your Chec account once you’ve registered and go into the setup view in the sidebar. Navigate into the shipping tab and add a shipping zone. 


b) Categories (at least three)

- Under Products in the sidebar, click to navigate into the Categories view and fill in Category Name and Permalink/Slug. For the sake of getting the deploy up and running before customizing your data later on, please add in the categories: Body Products, Hair Products, and Facial Products. 


c). Products (at least three) with:

  - Product name
  - Product description
  - Price
  - Enable shipping option
  - Assign product to a category
  - Custom permalink
  - 1 variant with at least 2 options


## One-click Deploy with Netlify (recommended)

The one-click deploy allows you to connect Netlify to your GitHub account to clone the `commercejs-example-store` repository and deploy it automatically. Be sure to go to Netlify and sign up for an account before clicking the deploy button.

 [![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-example-store)

Please note that the site deploy will first fail as your have yet to enter in your environment variables for your Netlify site. Configure your site by going under the Build and Deploy settings then Environment to enter your API key. You can access your Chec public key here as explained in the manual setup below. 

## Manual setup and Netlify deployment

Manual setup involves cloning the repo into your local environment and using the Netlify CLI for deployment.

1. Clone the repo

```bash
# Clone the repository locally, optionally rename the repo, change into the directory
git clone https://github.com/chec/commercejs-example-store.git chec-store 
cd chec-store
```

2. Install dependencies

```bash
# Install dependencies included in `package.json`.
yarn
```

3. Set up your environment variables

Replace the sample .env.example dotenv file at the root of the project to store your Chec public_key.

```bash
# Copy from source file to destination file
cp .env.example .env
```

You can access your API key under in your Chec dashboard setup, then navigate to the Develop tab to copy your Public Key.
```bash
// .env

# Replace with your Public API Key
CHEC_PUBLIC_KEY=your_public_API_key_here
```

This file is meant to not be committed to source control and also will be hidden in file browsers. Be sure to add your .env containing your API key to .gitignore. Lastly, commit your local repository to git.

3. Run your development environment on http://localhost:3000.
```
yarn dev
```

4. Make any necessary changes you need and push the code to a repository on Github or your choice of platform.

4. Deploy

Be sure to sign up for a Netlify account and log in to it. Navigate to “New site from Git” and give access to select your repo. Your build settings is automatically filled out for your from the `netlify.toml` in the template. Now go ahead and click the "deploy site" to see your live site!

## 🥞 Stack

- Framework - [Next.js](https://nextjs.org)
- eCommerce - [Chec/Commerce.js](https://commercejs.com)
- Hosting - [Netlify](https://netlify.com)
