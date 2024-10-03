// Imports
const express = require("express")
const mongoose = require("mongoose")
const { dbName, mongoUri, port } = require("./config")

// Configuracion de express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))


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
        console.log(`Escuchando en puerto: ${port}`)
    })
}
main()