const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

const file1 = new AttachmentBuilder('./picture/Lynette1.jpg');
const file2 = new AttachmentBuilder('./picture/lynette2.jpg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lynette')
		.setDescription('Show the guide for Lynette'),
	async execute(client, interaction) {
		
        // const PAGINATION = [
        //     "LYNETTE1",
        //     "LYNETTE2"
        // ];
        
        // client.on("interactionCreate", async (interaction) => {
        //     if (interaction.isButton()){

        //     }
        // });
        
        
        
        const embed = new EmbedBuilder()
			.setTitle('LYNETTE GUIDE')
			.setColor(0xC70EC7)
            .setImage('attachment://Lynette1.jpg')
			.setDescription('Elegance in the Shadows ✩✩✩✩')
			.setTimestamp();

		await interaction.reply({ 
            components : [new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                .setCustomId('LYNETTE1')
                .setLabel('Support Buffer')
                .setStyle(ButtonStyle.Primary),
                // new ButtonBuilder()
                // .setCustomId('LYNETTE2')
                // .setLabel('Main DPS')
                // .setStyle(ButtonStyle.Primary),
                )],    
            embeds : [embed], files: [file1] 
        });
	},
};