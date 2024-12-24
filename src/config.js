import dotenv from 'dotenv';

dotenv.config();

const config = {
  token: process.env.DISCORD_TOKEN,
  commands: {
    random: '!random'
  }
};

// トークンの存在チェック
if (!config.token) {
  throw new Error('Discord botトークンが設定されていません。.envファイルにDISCORD_TOKENを設定してください。');
}

export default config;