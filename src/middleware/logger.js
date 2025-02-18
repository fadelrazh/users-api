const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "../logs");
const logFile = path.join(logDir, "requests.log");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logger = (req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  fs.appendFile(logFile, logMessage, (err) => {
    if (err) console.error("Gagal menulis log", err);
  });

  console.log(logMessage);
  next();
};

module.exports = logger;
