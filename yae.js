/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
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
const pool = require("./config/db");

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

async function getRoles() {
  try {
    const testQuery = await pool.query("SELECT * FROM idrole LIMIT 1000;");
    console.log(testQuery);
    if (testQuery.rows.length > 0) {
      for (const role of roles) {
        ROLE[role.name] = role.idrole;
      }
      console.log(ROLE);
    }
    return testQuery.rows;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function connectDB() {
  console.log("Connecting to Postgres...");
  try {
    await pool.connect();
    await getRoles();
  } catch (err) {
    console.log(err);
  }
}

connectDB();

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

async function parseRoles(ROLE) {
  const roles = await getRoles();
  if (roles.length > 0) {
    for (const role of roles) {
      ROLE[role.name] = role.idrole;
    }
  }
}

// const ROLE = {
//   FR: "922551993539633193",
//   EN: "922552055946678332",
//   HE: "885977420321132575",
//   SHE: "885977364297834546",
//   THEY: "885977478651314286",
//   ANEMO: "857313193738633216",
//   HYDRO: "857313516645515274",
//   PYRO: "857313233949294644",
//   CRYO: "857313326782742528",
//   GEO: "857313816244125766",
//   DENDRO: "857313638373130261",
//   ELECTRO: "857313422923923517",
//   ANNOUNCEMENT: "827646232905252895",
//   LEAK: "857332000423804939",
//   COOPEU: "857310560810565642",
//   COOPUS: "857310874876248124",
//   COOPAS: "922547628712030248",
//   TCG: "1050356624012890153",
//   TWITCHEVA: "952221458669649940",
//   XIAO: "814436043653775430",
//   JEAN: "814435843485466665",
//   VENTI: "814435987769786388",
//   KAZUHA: "857311298848686120",
//   WANDERER: "1037139453057183784",
//   DILUC: "814435889286479872",
//   DEHYA: "1088796221235277896",
//   HUTAO: "816601280574652438",
//   KLEE: "814435994618036235",
//   YOIMIYA: "857311501018071080",
//   KEQING: "814436089921142825",
//   RAIDEN: "882956440992628736",
//   YAE: "942499411257331752",
//   CYNO: "1011646407133896715",
//   QIQI: "814436224332070924",
//   GANYU: "814436338656608286",
//   EULA: "844260280241225729",
//   AYAKA: "857311414200696842",
//   SHENHE: "929862007358906389",
//   ALBEDO: "814436892874899456",
//   ZHONGLI: "814436469321105488",
//   ITTO: "919993503507959819",
//   TARTAGLIA: "814436775488913428",
//   MONA: "814437335101603882",
//   KOKOMI: "882956513117876224",
//   YELAN: "982217355327320135",
//   AYATO: "942499404856848474",
//   NILOU: "1011646356852572220",
//   TIGHNARI: "1011646251353247835",
//   NAHIDA: "1037139336052871178",
//   ALHAITHAM: "1067867695992799403",
//   BAIZHU: "1088796898753785986",
// };

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    const role = interaction.guild.roles.cache.get(
      ROLE[interaction.customId.toUpperCase()]
    );

    const Nmem = interaction.member;
    if (!role)
      return interaction.reply({ content: "Role not found", ephemeral: true });
    if (Nmem.roles.cache.has(role.id)) {
      interaction.member.roles.remove(role).then((member) =>
        interaction.reply({
          content: `Le ${role} a bien ete remove à ${member}`,
          ephemeral: true,
        })
      );
    } else {
      interaction.member.roles.add(role).then((member) =>
        interaction.reply({
          content: `Le ${role} a bien ete add à ${member}`,
          ephemeral: true,
        })
      );
    }
  }
});

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

client.login(token);
