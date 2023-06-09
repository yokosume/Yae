const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
	once: true,
    execute(client) {
        client.user.setStatus('dnd');
		client.user.setActivity('to be cute');
    },
};