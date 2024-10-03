const { NewsApiProvider } = require("../services/news.provider")
const newsProvider = new NewsApiProvider()

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
            console.log("Error en NEWS CONTROLLER - SEARCH => ", err)
            res.status(500).json({ message: "Algo salió mal" })
        }
    }

    configureJobs() {
        setInterval( async () => {
            try{
                const noticias = await this.service.synchronizeNews(newsProvider)
                console.log("News have benn synchronized succesfully")
                console.log(noticias)
                // ¿ Enviar email al usuario cuando se actualicen las noticias ?
            }
            catch(err){
                console.log("Error synchronizing news! => ", err)
            }

        }, "60000")
    }
}


module.exports = { NewsController }
