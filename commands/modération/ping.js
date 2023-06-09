const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

const file = new AttachmentBuilder('./picture/YaeSecretaire.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(client, interaction) {
		const embed = new EmbedBuilder()
			.setTitle('🏓Pong!')
			.setColor(0xC70EC7)
			.setThumbnail('attachment://YaeSecretaire.png')
			.setDescription(`Latency is ${ Date.now() - interaction.createdTimestamp }ms. API Latency is ${Math.round(client.ws.ping)}ms`)
			.setTimestamp();
		await interaction.reply({ embeds : [embed], files: [file] });
	},
};
