// Imports
const express = require("express")
const compression = require("express-compression")
const mongoose = require("mongoose")
const { logger } = require("./logger")
const { dbName, mongoUri, port } = require("./config")

// Configuracion de express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

// compresion
app.use(compression({
    brotli: { enabled: true, zlib: {} }
}))


// Rutas
const createNewsRouter = require("./routes/news.router")

// Función main que le da vida al proyecto
const main = async () => {

    // Conexion a la DB
    await mongoose.connect(mongoUri, { dbName })


    // Funcionamiento de las rutas
    const routers = [
        { path: "/api/v1/news", createRouter: createNewsRouter },
    ]
    for (const { path, createRouter } of routers) {
        app.use(path, await createRouter())
    }


    // Listener del puerto
    app.listen(port, () => {
        logger.info(`Escuchando en puerto: ${port}`)
    })
}
main()