// utils/telegram.js
import axios from 'axios';

const BOT_TOKEN = '7714159842:AAESY_L1AJs63FwecXOAhqdUmB-eideYcnc';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

// const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/getChat`;

export const sendMessage = async (username, message) => {
  try {
    const response = await axios.post(TELEGRAM_API_URL, {
      // chat_id: `@${username}`,
      // chat_id: 1518332657,
      chat_id: 7714159842,
      text: message,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};

export const verifyUsername = async(username) => {
  try {
    const response = await axios.get(`${TELEGRAM_API_URL}?chat_id=${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.ok === false) {
      return null; // Username does not exist
    }
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};