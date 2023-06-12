const { Events } = require('discord.js');
const { ButtonBuilder, ActionRowBuilder, ButtonStyle, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const elementA = new AttachmentBuilder('./picture/AnemoLogo.png');
const elementP = new AttachmentBuilder('./picture/PyroLogo.png');
const elementC = new AttachmentBuilder('./picture/CryoLogo.png');
const elementE = new AttachmentBuilder('./picture/ElectroLogo.png');
const elementG = new AttachmentBuilder('./picture/GeoLogo.png');
const elementD = new AttachmentBuilder('./picture/DendroLogo.png');
const elementH = new AttachmentBuilder('./picture/HydroLogo.png');
const elementS = new AttachmentBuilder('./picture/StandardWish.jpg');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        const yaetraining = client.channels.cache.get('844638423951605790');


        const Pyro = new EmbedBuilder()
			.setTitle('Element : PYRO')
            .setImage('attachment://PyroLogo.png')
			.setColor(0xFF0000);
         
        const Hydro = new EmbedBuilder()
			.setTitle('Element : HYDRO')
            .setImage('attachment://HydroLogo.png')
			.setColor(0x000080);
        
        const Electro = new EmbedBuilder()
			.setTitle('Element : ELECTRO')
            .setImage('attachment://ElectroLogo.png')
			.setColor(0x9400D3);
            
        const Cryo = new EmbedBuilder()
			.setTitle('Element : CRYO')
            .setImage('attachment://CryoLogo.png')
			.setColor(0xFFFFFF);
        
        const Dendro = new EmbedBuilder()
			.setTitle('Element : DENDRO')
            .setImage('attachment://DendroLogo.png')
			.setColor(0x00FF00);
            
        const Anemo = new EmbedBuilder()
			.setTitle('Element : ANEMO')
            .setImage('attachment://AnemoLogo.png')
			.setColor(0x00FFFF);
            
        const Geo = new EmbedBuilder()
			.setTitle('Element : GEO')
            .setImage('attachment://GeoLogo.png')
			.setColor(0xF2B100);

        let pyroC = [];
        pyroC[0] = new ButtonBuilder()
        .setCustomId('KLEE')
        .setLabel('Klee')
        .setEmoji(`💣`)
        .setStyle(ButtonStyle.Primary);
        pyroC[1] = new ButtonBuilder()
        .setCustomId('HUTAO')
        .setLabel('Hu tao')
        .setEmoji(`👻`)
        .setStyle(ButtonStyle.Primary);
        pyroC[2] = new ButtonBuilder()
        .setCustomId('YOIMIYA')
        .setLabel('Yoimiya')
        .setEmoji(`🎇`)
        .setStyle(ButtonStyle.Primary);

        
        let cryoC = [];
        cryoC[0] = new ButtonBuilder()
        .setCustomId('GANYU')
        .setLabel('Ganyu')
        .setEmoji(`🐐`)
        .setStyle(ButtonStyle.Primary);
        cryoC[1] = new ButtonBuilder()
        .setCustomId('EULA')
        .setLabel('Eula')
        .setEmoji(`⚜️`)
        .setStyle(ButtonStyle.Primary);
        cryoC[2] = new ButtonBuilder()
        .setCustomId('AYAKA')
        .setLabel('Ayaka')
        .setEmoji(`👘`)
        .setStyle(ButtonStyle.Primary);
        cryoC[3] = new ButtonBuilder()
        .setCustomId('SHENHE')
        .setLabel('Shenhe')
        .setEmoji(`🦢`)
        .setStyle(ButtonStyle.Primary);

        let anemoC = [];
        anemoC[0] = new ButtonBuilder()
        .setCustomId('VENTI')
        .setLabel('Venti')
        .setEmoji(`🎶`)
        .setStyle(ButtonStyle.Primary);
        anemoC[1] = new ButtonBuilder()
        .setCustomId('XIAO')
        .setLabel('Xiao')
        .setEmoji(`👹`)
        .setStyle(ButtonStyle.Primary);
        anemoC[2] = new ButtonBuilder()
        .setCustomId('KAZUHA')
        .setLabel('Kazuha')
        .setEmoji(`🍁`)
        .setStyle(ButtonStyle.Primary);
        anemoC[3] = new ButtonBuilder()
        .setCustomId('WANDERER')
        .setLabel('Wanderer')
        .setEmoji(`🍃`)
        .setStyle(ButtonStyle.Primary);

        let geoC = [];
        geoC[0] = new ButtonBuilder()
        .setCustomId('ZHONGLI')
        .setLabel('Zhongli')
        .setEmoji(`☄️`)
        .setStyle(ButtonStyle.Primary);
        geoC[1] = new ButtonBuilder()
        .setCustomId('ALBEDO')
        .setLabel('Albedo')
        .setEmoji(`🏵️`)
        .setStyle(ButtonStyle.Primary);
        geoC[2] = new ButtonBuilder()
        .setCustomId('ITTO')
        .setLabel('Itto')
        .setEmoji(`😈`)
        .setStyle(ButtonStyle.Primary);

        let hydroC = [];
        hydroC[0] = new ButtonBuilder()
        .setCustomId('TARTAGLIA')
        .setLabel('Tartaglia')
        .setEmoji(`⚔️`)
        .setStyle(ButtonStyle.Primary);
        hydroC[1] = new ButtonBuilder()
        .setCustomId('KOKOMI')
        .setLabel('Kokomi')
        .setEmoji(`🐟`)
        .setStyle(ButtonStyle.Primary);
        hydroC[2] = new ButtonBuilder()
        .setCustomId('AYATO')
        .setLabel('Ayato')
        .setEmoji(`🗡️`)
        .setStyle(ButtonStyle.Primary);
        hydroC[3] = new ButtonBuilder()
        .setCustomId('YELAN')
        .setLabel('Yelan')
        .setEmoji(`🎲`)
        .setStyle(ButtonStyle.Primary);
        hydroC[4] = new ButtonBuilder()
        .setCustomId('NILOU')
        .setLabel('Nilou')
        .setEmoji(`💃`)
        .setStyle(ButtonStyle.Primary);

        let electroC = [];
        electroC[0] = new ButtonBuilder()
        .setCustomId('RAIDEN')
        .setLabel('Raiden Shogun')
        .setEmoji(`🌩️`)
        .setStyle(ButtonStyle.Primary);
        electroC[1] = new ButtonBuilder()
        .setCustomId('YAE')
        .setLabel('Yae Miko')
        .setEmoji(`🦊`)
        .setStyle(ButtonStyle.Primary);
        electroC[2] = new ButtonBuilder()
        .setCustomId('CYNO')
        .setLabel('Cyno')
        .setEmoji(`🐾`)
        .setStyle(ButtonStyle.Primary);

        let dendroC = [];
        dendroC[0] = new ButtonBuilder()
        .setCustomId('NAHIDA')
        .setLabel('Nadiha')
        .setEmoji(`🪴`)
        .setStyle(ButtonStyle.Primary);
        dendroC[1] = new ButtonBuilder()
        .setCustomId('ALHAITHAM')
        .setLabel('Al Haitham')
        .setEmoji(`🌿`)
        .setStyle(ButtonStyle.Primary);
        dendroC[2] = new ButtonBuilder()
        .setCustomId('BAIZHU')
        .setLabel('Baizhu')
        .setEmoji(`🐍`)
        .setStyle(ButtonStyle.Primary);

        // yaetraining.send ({
        //     embeds : [Pyro],
        //     files : [elementP],
        //     components : [
        //         {
        //             type : 1,
        //             components : [pyroC[0], pyroC[1], pyroC[2]],
        //         }
        //     ]
        // });
        
        // yaetraining.send ({
        //     embeds : [Hydro],
        //     files : [elementH],
        //     components : [
        //         {
        //             type : 1,
        //             components : [hydroC[0], hydroC[1], hydroC[2], hydroC[3], hydroC[4]],
        //         }
        //     ]
        // });
        // yaetraining.send ({
        //     embeds : [Electro],
        //     files : [elementE],
        //     components : [
        //         {
        //             type : 1,
        //             components : [electroC[0], electroC[1], electroC[2]],
        //         }
        //     ]
        // });
        // yaetraining.send ({
        //     embeds : [Cryo],
        //     files : [elementC],
        //     components : [
        //         {
        //             type : 1,
        //             components : [cryoC[0], cryoC[1], cryoC[2], cryoC[3]],
        //         }
        //     ]
        // });
        // yaetraining.send ({
        //     embeds : [Anemo],
        //     files : [elementA],
        //     components : [
        //         {
        //             type : 1,
        //             components : [anemoC[0], anemoC[1], anemoC[2], anemoC[3]],
        //         }
        //     ]
        // });
        // yaetraining.send ({
        //     embeds : [Geo],
        //     files : [elementG],
        //     components : [
        //         {
        //             type : 1,
        //             components : [geoC[0], geoC[1], geoC[2]],
        //         }
        //     ]
        // });
        // yaetraining.send ({
        //     embeds : [Dendro],
        //     files : [elementD],
        //     components : [
        //         {
        //             type : 1,
        //             components : [dendroC[0], dendroC[1], dendroC[2]],
        //         }
        //     ]
        // });						


    },
};    