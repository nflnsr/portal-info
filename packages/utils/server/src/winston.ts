import winston from "winston";
import "winston-daily-rotate-file";

const transports = new winston.transports.DailyRotateFile({
  filename: "logs/%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "1m",
  maxFiles: "14d",
  level: "error",
  handleExceptions: true,
});

const logger = winston.createLogger({
  level: "silly",
  format: winston.format.combine(
    winston.format.json({ space: 2 }),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss.SSS A",
    }),
    winston.format.label({ label: "[[LOGGER]]" }),
    winston.format.printf(
      (info) => `${info.label} ${info.timestamp} ${info.level} ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      level: "silly",
      handleExceptions: true,
      format: winston.format.combine(winston.format.colorize({ all: true })),
    }),
    transports,
  ],
});

export default logger;