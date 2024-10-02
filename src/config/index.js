const { config } = require("dotenv")
config()

module.exports = {
    mongoUri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME,
    newsApi: process.env.NEWS_API,
    port: process.env.PORT
}
