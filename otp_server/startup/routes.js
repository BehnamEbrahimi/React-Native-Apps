const express = require('express');
const error = require('../middlewares/error');
const authRouter = require('../routes/auth');

module.exports = function(app) {
  app.use(express.json());
  app.use('/auth', authRouter);
  app.use(error);
};
