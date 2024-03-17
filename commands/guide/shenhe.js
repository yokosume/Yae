const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

const file = new AttachmentBuilder('./picture/Shenhe.jpg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shenhe')
		.setDescription('Show the guide for Shenhe'),
	async execute(client, interaction) {
		const embed = new EmbedBuilder()
			.setTitle('Shenhe')
			.setColor(0xC70EC7)
            .setImage('attachment://Shenhe.jpg')
			.setDescription('pog je sais pas quoi ecrire ici atm')
			.setTimestamp();
		await interaction.reply({ embeds : [embed], files: [file] });
	},
};