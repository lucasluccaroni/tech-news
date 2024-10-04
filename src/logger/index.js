const winston = require("winston")

const transports = [
    new winston.transports.Console({ level: "info" }),
    new winston.transports.File({ dirname: `${__dirname}/../../logs`, level: "warn" })
]

const logger = winston.createLogger({
    transports
})

module.exports = { logger }

/*
error: 0,
warn: 1,
info: 2,
http: 3,
verbose: 4,
debug: 5,
silly: 6
*/