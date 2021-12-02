let express = require('express');
let app = express();
let path = require('path')
let Contenedor = require("./productos");
let contenedor = new Contenedor("./productos.txt")
const PORT = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set("views", path.join(__dirname, "views", "pug"));
app.set("view engine", "pug");

app.get("/", (req, res, next) => {
    res.render("form", { data })
})

app.post("/productos", (req, res, next) => {
    contenedor.save(req.body)
    res.redirect("/")
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})