/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const fs = require("node:fs");
const path = require("node:path");
const {
  Client,
  Events,
  GatewayIntentBits,
  Collection,
  IntentsBitField,
} = require("discord.js");
const mongoose = require("mongoose");
const { token } = require("./config.json");
const { server } = require("./config.json");

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ogwuljvjnlhmyvqodncw.supabase.co/'
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


let ROLE = {};

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
client.commands = new Collection();

////////////////////////////////////////// CONNECTION A LA BASE DE DONNEE //////////////////////////////////////////////////////

async function getRoles() {
  try {
    const { data, error } = await supabase.from('idrole').select("*");
    if (data.length > 0) {
      const roles = data;
      for (const role of roles) {
        ROLE[role.name] = (role.roleId.toString());
      }
      console.log(ROLE);
    }
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function connectDB() {
  console.log("Connecting to Postgres...");
  try {
    await getRoles();
  } catch (err) {
    console.log(err);
  }
}

connectDB();

////////////////////////////////////////////////////// LECTURE DES FICHIERS ////////////////////////////////////////////////////////////

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}



//////////////////////////////////////////////// BOUTON ROLE SETUP //////////////////////////////////////////////////

async function parseRoles(ROLE) {
  const roles = await getRoles();
  if (roles.length > 0) {
    for (const role of roles) {
      ROLE[role.name] = role.idrole;
    }
  }
}

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    const role = interaction.guild.roles.cache.get(
      ROLE[interaction.customId.toUpperCase()]
    );
    console.log(role); console.log(ROLE[interaction.customId.toUpperCase()]);
    

    const Nmem = interaction.member;
    
    

    if (!role)
      return interaction.reply({ content: "Role not found", ephemeral: true });
    if (Nmem.roles.cache.has(role.id)) {
      interaction.member.roles.remove(role).then((member) =>
        interaction.reply({
          content: `Le role ${role} a bien ete remove à ${member}`,
          ephemeral: true,
        })
      );
    } else {
      interaction.member.roles.add(role).then((member) =>
        interaction.reply({
          content: `Le role ${role} a bien ete add à ${member}`,
          ephemeral: true,
        })
      );
    }
  }
});

///////////////////////////////////////////////////// BOUTON INTERACTION GUIDE ///////////////////////////////////////////////////////////// 


// client.on('interactionCreate', async interaction => {
//   if (interaction.isButton()) {
//       const buttonID = interaction.customId
//       if (buttonID === 'LYNETTE1') {
//           interaction.reply({
//               content: 'Hello'
//           })
//       }
//   }
// })

////////////////////////////////////////////////////// INTERACTION CREATE //////////////////////////////////////////////////////////////////

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(client, interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isButton()) return;
  console.log("Button interaction");
});

/////////////////////////////////////////////////////////////////// TOKEN ET ALLUMAGE !! //////////////////////////////////////////

client.login(token);
