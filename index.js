const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
app.use(express.json());

const token = '8138361562:AAHWd_Fs08utaWsOPjp5p8UmUrAehutUrxc';
const bot = new TelegramBot(token);

// Webhook রিকুয়েস্ট হ্যান্ডল করা
app.post(`/${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// যখন ইউজার /start পাঠাবে
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hello from Vercel!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot is running on port ${PORT}`);
});
