const tmi = require("tmi.js");
const fs = require("fs");

require("dotenv").config();

const commands = {
  question: {
    response: (argument) => {
      return `Successfully added "${argument}" to the list of questions.`;
    },
  },
};

const client = new tmi.Client({
  options: { debug: true }, // you can disable logging here if you don't want it
  connection: {
    reconnect: true,
  },
  channels: [process.env.TWITCH_BOT_USERNAME],
});

client.connect();

client.on("message", async (channel, tags, message, self) => {
  if (self) return;

  if (message.startsWith("!question")) {
    const argument = message.split("!question ")[1];
    if (!argument) return;
    try {
        const question = await fs.appendFileSync("./questions/questions.txt", `${tags.username} - ${argument}\n`);
    } catch (error) {
        console.log(error);
    }
  }
});
