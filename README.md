# Q&A Twitch Bot

A hot garbage twitch bot that has one command and one purpose... to add questions to a text file so that you can answer them later!

### Setup 

1. Setup a env file ~ you can use the .env.example that I provided.
   
2. Get a twitch OAuth Key, I got mine here: [https://twitchtokengenerator.com](https://twitchtokengenerator.com)

   1. **When it gives you the option, select Bot Chat Token**
   2. **Authorize your chat bot Twitch Account**
   3. **Verify your not a robot**
   4. **copy the Access Token for the next step**

3. Add OAuth key and bot name to the .env file - the bot name is going to be the same name as your channel you authorized and got the token for

**Here is an example of the .env file**

```
TWITCH_BOT_USERNAME="yourbotnamehere"
TWITCH_OAUTH_TOKEN="youroauthtokenhere"
```

### Running the bot

Now if you set that all up correctly then you should be able to run the following command to boot up the bot.

`yarn start`

### Implemented Commands

#### `!question`

```
qwadebot: !question Do you like Netflix?
qwadebot: Successfully added "Do you like Netflix?" to the list of questions.
```

### Finding the questions

The questions from the bot will be located in `questions/questions.txt`
