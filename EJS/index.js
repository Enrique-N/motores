let express = require('express');
let app = express();
let { Server: HttpServer } = require("http")
const httpServer = new HttpServer(app);
let Socket = require("./utils/sockets")
let path = require('path')
const PORT = 3000
let socket = new Socket(httpServer)

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set("views", path.join(__dirname, "views", "ejs"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    res.render("index",)
})

app.post("/productos", (req, res, next) => {
    res.redirect("/")
})

socket.init()




httpServer.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
