const { Router } = require("express")

module.exports = async () => {

    const router = Router()


    router.get("/", (req, res) => {
        res.json("Funcionando")
    })

    return router
}