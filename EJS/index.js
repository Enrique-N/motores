let express = require('express');
let app = express();
let { Server: SocketIO } = require("socket.io")
let { Server: HttpServer } = require("http")
const httpServer = new HttpServer(app);
const io = new SocketIO(httpServer);
let path = require('path')
let Contenedor = require("./productos");
let contenedor = new Contenedor("./productos.txt")
const PORT = 3000

let obj = []

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set("views", path.join(__dirname, "views", "ejs"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    res.render("index", { obj: obj })
})

app.post("/productos", (req, res, next) => {
    res.redirect("/")
})

io.on('connection', socket => {
    console.log(`Usuario conectado ${socket.id}`)
    socket.on("infoProductos", item => {
        obj = data
        contenedor.save(item)
        io.sockets.emit("mi_sala", data)
    })
    socket.emit("init", data)
})


httpServer.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
