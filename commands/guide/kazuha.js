const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

const file = new AttachmentBuilder('./picture/Kazuha.jpg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kazuha')
		.setDescription('Show the guide for Kazuha'),
	async execute(client, interaction) {
		const embed = new EmbedBuilder()
			.setTitle('Kazuha')
			.setColor(0xC70EC7)
            .setImage('attachment://Kazuha.jpg')
			.setDescription('pog je sais pas quoi ecrire ici atm')
			.setTimestamp();
		await interaction.reply({ embeds : [embed], files: [file] });
	},
};