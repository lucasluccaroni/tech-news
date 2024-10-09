const { dbName, mongoUri } = require("../config")
const mongoose = require("mongoose")
const { logger } = require("../logger")

const { NewsDao } = require("../dao/news.dao")
const { NewsService } = require("../services/news.service")
const { NewsApiProvider } = require("../services/news.provider")

const dao = new NewsDao()
const service = new NewsService(dao)
const newsProvider = new NewsApiProvider()

const main = async () => {
    try {
        await mongoose.connect(mongoUri, { dbName })
        await service.synchronizeNews(newsProvider)

        logger.info("News have benn synchronized succesfully")
    }
    catch (err) {
        logger.error("Error synchronizing news! => ", err)
    }
    finally {
        process.exit()
    }
}
main()
