let express = require('express');
let app = express();
const PORT = 3000;
let path = require('path')
    //middlawares
app.use(express.static('public'))


//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})
app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
//serve
app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))