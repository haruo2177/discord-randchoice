export function validateEnvironmentVariables() {
  if (!process.env.DISCORD_TOKEN) {
    throw new Error('環境変数DISCORD_TOKENが設定されていません。.envファイルを確認してください。');
  }
}

export function validateVoiceChannel(voiceChannel) {
  if (!voiceChannel) {
    throw new Error('ボイスチャンネルに接続していません。');
  }
  
  if (voiceChannel.members.size === 0) {
    throw new Error('ボイスチャンネルに誰も接続していません。');
  }
}