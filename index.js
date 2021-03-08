const tmi = require('tmi.js');
require('dotenv').config()
const robot = require('robotjs')

const client = new tmi.Client({
    options: {
        debug: true,
        messagesLogLevel: "info"
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    },
    channels: ['adsnipers']
});

client.connect().catch(console.error)

client.on('connect', (channel, tags, message, self) => {
    client.say('#adsnipers', 'Chat sabotage by Adsnipers is running, use !sabotage to get started!');
})

client.on('message', (channel, tags, message, self) => {
    if (self) return;
    if (message.toLowerCase() === '!sabotage') {
        client.say(channel, 'Sabotage commands are: !w\r !s \r !a \r !d \r !esc \r !e \r !q \r !r \r !space | use these commands to press the corrosponding buttons on my keyboard')
    }
    commandDetect(message);
});

async function commandDetect(message) {
    if (message.toLowerCase() === '!w') {
        robot.keyTap('w');
    }
    if (message.toLowerCase() === '!s') {
        robot.keyTap('s');
    }
    if (message.toLowerCase() === '!a') {
        robot.keyTap('d');
    }
    if (message.toLowerCase() === '!d') {
        robot.keyTap('a');
    }
    if (message.toLowerCase() === '!esc') {
        robot.keyTap('escape');
    }
    if (message.toLowerCase() === '!e') {
        robot.keyTap('e');
    }
    if (message.toLowerCase() === '!q') {
        robot.keyTap('q');
    }
    if (message.toLowerCase() === '!r') {
        robot.keyTap('r')
    }
    if (message.toLowerCase() === '!space') {
        robot.keyTap('space');
    }
}