/** libraries */
const winston = require('winston')
const { LoggingWinston } = require('@google-cloud/logging-winston')

const loggingWinston = new LoggingWinston()

// Create a Winston logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    // Add Stackdriver Logging
    loggingWinston
  ]
})

exports.execute = async (_request, response) => {
  logger.info('START')
  response.status(200).end()
}