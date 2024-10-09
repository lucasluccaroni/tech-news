const { logger } = require("../logger")
const child_process = require("child_process")

class NewsController {

    constructor(service) {
        this.service = service
    }

    async search(req, res) {
        try {
            const title = req.query.title
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

            child_process.fork(`${__dirname}/../scripts/syncNews.js`, { env: process.env })

        }, "60000")
    }
}


module.exports = { NewsController }
