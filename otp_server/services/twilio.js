const twilio = require('twilio');

module.exports = new twilio.Twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);
