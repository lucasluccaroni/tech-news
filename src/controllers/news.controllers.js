const { logger } = require("../logger")
const { NewsApiProvider } = require("../services/news.provider")
const newsProvider = new NewsApiProvider()

class NewsController {

    constructor(service) {
        this.service = service
    }

    async search(req, res) {
        try {
            const title = req.query.title
            logger.info("TITLE SEARCH CONTROLLER => ", title)
            const results = await this.service.search(title)
            return res.json(results)
        }
        catch (err) {
            logger.error("Error en NEWS CONTROLLER - SEARCH => ", err)
            res.status(500).json({ message: "Algo salió mal" })
        }
    }

    configureJobs() {
        setInterval(async () => {
            try {
                const noticias = await this.service.synchronizeNews(newsProvider)
                logger.info("News have benn synchronized succesfully")
                // console.log(noticias)
                // ¿ Enviar email al usuario cuando se actualicen las noticias ?
            }
            catch (err) {
                logger.error("Error synchronizing news! => ", err)
            }

        }, "600000")
    }
}


module.exports = { NewsController }
