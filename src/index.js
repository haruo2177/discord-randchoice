import { Client, Events } from 'discord.js';
import { config } from 'dotenv';
import { DISCORD_INTENTS, COMMANDS } from './config/discord.js';
import { validateEnvironmentVariables } from './utils/validation.js';
import { handleRandomCommand } from './commands/random.js';

// 環境変数の読み込み
config();
validateEnvironmentVariables();

const client = new Client({ intents: DISCORD_INTENTS });

client.once(Events.ClientReady, () => {
  console.log(`✅ ${client.user.tag}としてログインしました！`);
});

client.on(Events.MessageCreate, async (message) => {
  if (message.content === COMMANDS.random) {
    await handleRandomCommand(message);
  }
});

try {
  await client.login(process.env.DISCORD_TOKEN);
} catch (error) {
  console.error('Discord botの起動に失敗しました:', error.message);
  process.exit(1);
}