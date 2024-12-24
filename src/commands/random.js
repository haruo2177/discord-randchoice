import { validateVoiceChannel } from '../utils/validation.js';
import { getRandomMember } from '../utils/random.js';

export async function handleRandomCommand(message) {
  try {
    const voiceChannel = message.member?.voice.channel;
    validateVoiceChannel(voiceChannel);
    
    const randomMember = getRandomMember(voiceChannel.members);
    await message.channel.send(`🎲 選ばれたのは... **${randomMember.user.username}** さんです！`);
  } catch (error) {
    await message.reply(error.message);
  }
}