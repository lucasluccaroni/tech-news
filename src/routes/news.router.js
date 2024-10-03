const { Router } = require("express")
const { NewsDao } = require("../dao/news.dao")
const { NewsService } = require("../services/news.service")
const { NewsController } = require("../controllers/news.controllers")

const dao = new NewsDao()
const service = new NewsService(dao)
const controller = new NewsController(service)



module.exports = async () => {

    const router = Router()


    router.get("/", async (req, res) => {
        res.json("Funcionando")
    })

    router.get("/search", async (req, res) => {
        await controller.search(req, res)

    })

    return router
}