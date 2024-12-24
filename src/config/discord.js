import { GatewayIntentBits } from 'discord.js';

export const DISCORD_INTENTS = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
];

export const COMMANDS = {
  random: '!random'
};