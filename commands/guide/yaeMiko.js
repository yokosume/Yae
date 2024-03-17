const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

const file = new AttachmentBuilder('./picture/Yae.jpg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yae')
		.setDescription('Show the guide for Yae Miko'),
	async execute(client, interaction) {
		const embed = new EmbedBuilder()
			.setTitle('Yae Miko')
			.setColor(0xC70EC7)
            .setImage('attachment://Yae.jpg')
			.setDescription('pog je sais pas quoi ecrire ici atm')
			.setTimestamp();
		await interaction.reply({ embeds : [embed], files: [file] });
	},
};