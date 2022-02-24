# Q&A Twitch Bot

A hot garbage twitch bot that has one command and one purpose... to add questions to a text file so that you can answer them later!

### Setup 

1. Setup a env file ~ you can use the .env.example that I provided.

**Here is an example of the .env file**

```
TWITCH_BOT_USERNAME="yourbotnamehere"
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
