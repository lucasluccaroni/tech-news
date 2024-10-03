class NewsController {

    constructor(service) {
        this.service = service
    }

    async search(req, res) {

        try{
            const title = req.query.title
            const results = await this.service.search(title)
            return res.json(results)
        }
        catch(err){
            console.log("Error en NEWS CONTROLLER - SEARCH => ", err)
            res.status(500).json({message: "Algo salió mal"})
        }
    }
}


module.exports = { NewsController }
