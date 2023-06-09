/* eslint-disable quotes */
const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quentin')
		.setDescription('How is Quentin today'),
	async execute(client, interaction) {

		const quentin = ["Un Prof Méchant", "Un Papy Méchant", "Un Humouriste Méchant", "Un Prof Gentil", "Un Papy Gentil", "Un Humouriste Gentil"];
		const alea = ["0", "1"];

		const randomQ = quentin[Math.floor(Math.random() * quentin.length)];
		const Ari = alea[Math.floor(Math.random() * alea.length)];
		const alzheimer = alea[Math.floor(Math.random() * alea.length)];
		const JetdeRisque = alea[Math.floor(Math.random() * alea.length)];
		const Mods = alea[Math.floor(Math.random() * alea.length)];

		const QPrM1 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Ari a besoin d'aide pour ses devoir, mais dans sa méchanceté Quentin la fait passer au tableau devant tout le monde alors qu'elle y arrive pas`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QPrM2 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Le prof fait grève et va mettre le feu dans des manifs`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QPrG1 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Ari a besoin d'aide pour ses devoir il va donc aider Ari et il finit meme par lui donner le Corriger du DS avant le DS`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QPrG2 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Le prof fait cours mais decide de faire un gouter pour recompenser Ari d'avoir réussit son DS`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QPaM1 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Fait semblant d'avoir oublier ses petits enfants juste pour leur faire peur et rigoler`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QPaM2 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			ils se souvient bel et bien de ses petits enfants mais bon il essaie lentement de les redonner a leur parents car il ne veux pas les voir`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QPaG1 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Papy a oublié la date de l'anniversaire de Gwenn du coup par sécurité il lui redit encore une fois et lui offre aussi des fleurs ... *oui on a compris papy*`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QPaG2 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Papy a un pris ses medics et est partie ce coucher tôt comme il aime bien le faire`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QHG11 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Quentin tente de faire une blague drole genre tout sauf celle du T word
			Eva voit la blague mais en vrai la blague passe`)
			.setColor(0xC70EC7)
			.setTimestamp();
		const QHG12 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Quentin tente de faire une blague drole genre tout sauf celle du T word
			Pas de Chance c'est Nico mais il fait rien car sinon ça va encore etre du Modo abuse`)
			.setColor(0xC70EC7)
			.setTimestamp();	
		const QHG21 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			nQuentin decide d'etre Gentil c'est pas le jour de faire des blagues`)
			.setColor(0xC70EC7)
			.setTimestamp();	
		const QHM11 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Quentin pour essayer de se calmer spam les blagues de mauvais gout
			Eva voit la blague mais comme elle est gentille est lui dit juste d'arreter, Quentin d'en sors Vivant mais mute 5 min par le bot`)
			.setColor(0xC70EC7)
			.setTimestamp();	
		const QHM12 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Quentin pour essayer de se calmer spam les blagues de mauvais gout
			Pas de Chance c'est Nico qui voit la blague et missclick sur le Kick button, Quentin s'en sors blessé mais il revient avec son lien qu'il a save`)
			.setColor(0xC70EC7)
			.setTimestamp();	
		const QHM21 = new EmbedBuilder()
			.setTitle(`Comment est Quentin aujourd'hui ?`)
			.setDescription(`Aujourd'hui Quentin est ${randomQ}\n
			Quentin decide d'etre Gentil.... Ah c'est quoi d'etre Gentil, il fait quand meme la blague du T word`)
			.setColor(0xC70EC7)
			.setTimestamp();				
	
		if (randomQ == "Un Prof Méchant") {
			if (Ari == 0) {
				await interaction.reply({ 
					embeds : [QPrM1],
				});
			} else {
				await interaction.reply({
					embeds : [QPrM2],
				});
			}
		}
		if (randomQ == "Un Prof Gentil") {
			if (Ari == 0) {
				await interaction.reply({
					embeds : [QPrG1],
				});
			} else {
				await interaction.reply({
					embeds : [QPrG2],
				});
			}
		}
		if (randomQ == "Un Papy Méchant") {
			if (alzheimer == 0) {
				await interaction.reply({
					embeds : [QPaM1],
				});
			} else {
				await interaction.reply({
					embeds : [QPaM2],
				});
			}
		}
		if (randomQ == "Un Papy Gentil") {
			if (alzheimer == 0) {
				await interaction.reply({
					embeds : [QPaG1],
				});
			} else {
				await interaction.reply({
					embeds : [QPaG2],
				});
			}
		}
		if (randomQ == "Un Humouriste Méchant") {
			if (JetdeRisque == 0) {
				if (Mods == 0) {
					await interaction.reply ({
						embeds : [QHM11],
					});
				} else {
					await interaction.reply ({
						embeds : [QHM12],
					});
				}
			} else {
				await interaction.reply ({
					embeds : [QHM21],
				});
			}
		}
		if (randomQ == "Un Humouriste Gentil") {
			if (JetdeRisque == 0) {
				if (Mods == 0) {
					await interaction.reply ({
						embeds : [QHG11],
					});
				} else {
					await interaction.reply ({
						embeds : [QHG12],
					});
				}
			} else {
				await interaction.reply ({
					embeds : [QHG21],
				});
			}
		}
	},
};