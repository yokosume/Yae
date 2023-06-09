const { EmbedBuilder, AttachmentBuilder, GuildMember, Embed } = require('discord.js');
const file = new AttachmentBuilder('./picture/YaeWakeUp.gif');

module.exports =  {
    name: "guildMemberAdd",
    once: false,
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get('814443346113069077');
        const roleChannel = member.guild.channels.cache.get('1050362589655339008');
        
        const WelcomeEmbed = new EmbedBuilder ()
            .setTitle(`✨Welcome to **${member.guild.name}**✨!`)
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .setColor(0xC70EC7)
            .setImage('attachment://YaeWakeUp.gif')
            .setDescription(`★ Hello ${user}

            ★ Please take your language role to access channel in ${roleChannel} and others in the dedicated category
            
            ★ Find information about Eva’s twitch channel and planning (FR)
            
            ★ Don't hesitate to speak with others and ask for help 😉
            
            ★ There are also some channels to talk about multigaming for fellow gamers
            
            ★ We hope you'll like it here ><.`);

        welcomeChannel.send({ embeds : [WelcomeEmbed], files : [file],});

    },
};
