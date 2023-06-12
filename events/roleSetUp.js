const { Events } = require('discord.js');
const { ButtonBuilder, ActionRowBuilder, ButtonStyle, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const languageI = new AttachmentBuilder('./picture/YaeLanguage.png');
const pronounsI = new AttachmentBuilder('./picture/YaePronouns.png');
const pingsI = new AttachmentBuilder('./picture/YaePing.png');
const elementI = new AttachmentBuilder('./picture/YaeElement.png');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		
        const roleChannel = client.channels.cache.get('1089847953079930920');
		
		const language = new EmbedBuilder()
			.setTitle('Language')
			.setDescription(`Choose the languages ​​you want to get access to every channel\n`)
			.setImage('attachment://YaeLanguage.png')
			.setColor(0xC70EC7);
        // console.log(roleChannel);
        roleChannel.send({
			components : [new ActionRowBuilder().setComponents(
			new ButtonBuilder()
                .setCustomId('FR')
                .setLabel('Français')
                .setStyle(ButtonStyle.Primary)
				.setEmoji(`🇨🇵`),
			new ButtonBuilder()
                .setCustomId('EN')
                .setLabel('English')
                .setStyle(ButtonStyle.Primary)
				.setEmoji(`🇬🇧`),
			)],
			embeds : [language],
			files : [languageI],
        });
        

		const pronouns = new EmbedBuilder()
			.setTitle('Choose your prefered pronouns')
			.setImage('attachment://YaePronouns.png')
			.setColor(0xC70EC7);
        roleChannel.send({
			components : [new ActionRowBuilder().setComponents(
			new ButtonBuilder()
                .setCustomId('HE')
                .setLabel('He / him')
                .setStyle(ButtonStyle.Primary)
				.setEmoji(`💚`),
			new ButtonBuilder()
                .setCustomId('SHE')
                .setLabel('She / her')
                .setStyle(ButtonStyle.Primary)
				.setEmoji(`💜`),
			new ButtonBuilder()
                .setCustomId('THEY')
                .setLabel('They / them')
                .setStyle(ButtonStyle.Primary)
				.setEmoji(`🧡`),
			)],
			embeds : [pronouns],
			files : [pronounsI]
        });
		

		const pings = new EmbedBuilder()
			.setTitle('Pings :')
			.setDescription(`Annoucements : Every informations about Update livestream / Codes / Server Update / WebEvent
			\nLeaks / Spoils : If u want to discover what is going to happen in the next Genshin patch
			\nCoop EU / US / ASIA : Need help ? or just play with friend then lets coop
			\nTCG : To play and show your extreme strategie on the genshin Card Game 
			\nTwitch Notification : Si vous ne voulez pas manquer un seul stream de Eva (Les streams sont en Français)
			 \n`)
			.setImage('attachment://YaePing.png')
			.setColor(0xC70EC7);
		
		let pingB = [];
		pingB[0] = new ButtonBuilder()
			.setCustomId('ANNOUNCEMENT')
			.setLabel('Announcement')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🔔`);
		pingB[1] = new ButtonBuilder()
			.setCustomId('LEAK')
			.setLabel('Leaks / Spoils')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🧐`);
		pingB[2] = new ButtonBuilder()
			.setCustomId('TCG')
			.setLabel('TCG')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🎲`);
		pingB[3] = new ButtonBuilder()
			.setCustomId('TWITCHEVA')
			.setLabel('Twitch Notification')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`📹`);				
		pingB[4] = new ButtonBuilder()
			.setCustomId('COOPEU')
			.setLabel('Coop Europe')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🇪🇺`);
		pingB[5] = new ButtonBuilder()
			.setCustomId('COOPUS')
			.setLabel('Coop America')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🇺🇸`);
		pingB[6] = new ButtonBuilder()
			.setCustomId('COOPAS')
			.setLabel('Coop Asia')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🇨🇳`);
		
		roleChannel.send ({
			embeds : [pings],
			files : [pingsI],
			components : [
				{
					type : 1,
					components : [pingB[0], pingB[1], pingB[2], pingB[3]],
				},
				{
					type : 1,
					components : [pingB[4], pingB[5], pingB[6]],
				}
			]
		});		

		const element = new EmbedBuilder()
			.setTitle('Choose Your Element')
			.setDescription(`U will be in the color of your element, choose your team wisely\n`)
			.setImage('attachment://YaeElement.png')
			.setColor(0xC70EC7)

		let elementsB = [];
			elementsB[0] = new ButtonBuilder()
			.setCustomId('ANEMO')
			.setLabel('Anemo')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🌬️`);
			elementsB[1] = new ButtonBuilder()
			.setCustomId('GEO')
			.setLabel('Geo')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🪨`);
			elementsB[2] = new ButtonBuilder()
			.setCustomId('PYRO')
			.setLabel('Pyro')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🔥`);
			elementsB[3] = new ButtonBuilder()
			.setCustomId('ELECTRO')
			.setLabel('Electro')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🌩️`);
			elementsB[4] = new ButtonBuilder()
			.setCustomId('HYDRO')
			.setLabel('Hydro')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`💧`);
			elementsB[5] = new ButtonBuilder()
			.setCustomId('CRYO')
			.setLabel('Cryo')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`❄️`);
			elementsB[6] = new ButtonBuilder()
			.setCustomId('DENDRO')
			.setLabel('Dendro')
			.setStyle(ButtonStyle.Primary)
			.setEmoji(`🌱`);
			
		
		roleChannel.send ({
			embeds : [element],
			files : [elementI],
			components : [
				{
					type : 1,
					components : [elementsB[0], elementsB[1], elementsB[2], elementsB[3], elementsB[4]],
				},
				{
					type : 1,
					components : [elementsB[5], elementsB[6]],
				}
			]
		});
			
	},
};