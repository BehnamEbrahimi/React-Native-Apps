require('express-async-errors');

module.exports = function() {
  process.on('uncaughtException', ex => {
    log.error(ex.message, ex);
    process.exit(1);
  });

  process.on('unhandledRejection', ex => {
    log.error(ex.message, ex);
    process.exit(1);
  });
};
