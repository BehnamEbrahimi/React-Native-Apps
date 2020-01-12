const express = require('express');
const User = require('../models/User');
const twilio = require('../services/twilio');

const router = express.Router();

router.post('/', async (req, res) => {
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad input.' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const code = Math.floor(Math.random() * 8999 + 1000);

  try {
    await twilio.messages.create({
      body: `Your code is ${code}.`,
      to: `+${phone}`,
      from: process.env.TWILIO_NO
    });
  } catch (ex) {
    return res.status(422).send({ error: ex.message });
  }

  let user = await User.findOne({ phone });

  if (user) {
    user.code = code;
    user.codeValid = true;
    await user.save();
  } else {
    user = await new User({ phone, code, codeValid: true }).save();
  }

  res.send({ success: true });
});

router.post('/verify', async (req, res) => {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: 'Bad input.' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const code = parseInt(req.body.code);

  let user = await User.findOne({ phone });

  if (!user || parseInt(user.code) !== code || !user.codeValid) {
    return res.status(422).send({ error: 'Invalid phone or code.' });
  }

  user.codeValid = false;
  await user.save();

  const token = user.generateAuthToken();
  res.send({ token });
});

module.exports = router;
