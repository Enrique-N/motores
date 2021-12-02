let express = require('express');
let hbs = require("express-handlebars");
let app = express();
let Contenedor = require("./productos");
let contenedor = new Contenedor("./productos.txt")
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", hbs.engine());

app.set("views", "./views/hbs");

app.set("view engine", "handlebars");

app.get("/", (req, res, next) => {
    res.render("index", { data })
})

app.post("/productos", (req, res, next) => {
    contenedor.save(req.body)
    res.redirect("/")
})

app.listen(PORT, () => { console.log(`Server on http://localhost:${PORT}`) })