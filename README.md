# gipht

> a GitHub App built with [probot](https://github.com/probot/probot) that sends giphts

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/20134767/41519312-3747392e-727c-11e8-8416-1f779f6b4e56.gif)

## Getting Started with Glitch

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/bdougie-gipht)

To get your own Glitch-hosted giphy Bot up-and-running, start by clicking the "Remix on Glitch" button above, and follow the steps below:

1. [Configure a new app on Github](https://github.com/settings/apps/new).
    - For the Webhook URL, use `https://www.example.com`. This will be replaced later.
    - For the Webhook Secret, open a terminal and run `openssl rand -base64 32`. Copy/paste the outputted value to the Webhook Secret box. Keep this handy until Step 3.
    - Choose the permissions you want to give your bot based on what you want to build (ex. issues bot, PR bot, hybrid).
    - Save your changes.

2. You will need to download your private key near the end of the page. In order to use Glitch's environmental variables feature, we will need to make the private key into a single line, including a trailing `\n` character. 
    - Here's an example, the actual key will be longer: 
`-----BEGIN RSA PRIVATE KEY-----\ndfkls83jrfsdf\nndfkls83jrfsdf\ndfkls83jrfsdf\n-----END RSA PRIVATE KEY-----\n`
    - If you are using Mac or Linux (`gawk` on some distributions), you can do this in your command line in the folder where your private key file is saved by running the command: `awk '{printf "%s\\n", $0}' private_key_file_name.pem` and it will look similar to the example.
    - You can also do the same thing in the text editor of your choice if you like doing regex stuff there.  
    - Keep this single line private key handy until Step 3. 

3. Now, go to your Glitch project and edit the `.env` file (at left) with your app credentials. 
    - `APP_ID` can be found in the About section of your Github app.
    - `WEBHOOK_SECRET` is the value you generated in Step 1.
    - `PRIVATE_KEY` should be set to your single line private key from Step 2. **Remember** to put quotation marks `'` around the key, otherwise, it won't work.
    - `NODE_ENV=` should be set to `production`. 
    - `GIPHY=` You will need to get a giphy key to make the gif searching working - create one at the [giphy developer site](https://developers.giphy.com/)

4. Wait for app to load. A green `Live` label should show up next to the **Show** button when it's finished loading.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.
