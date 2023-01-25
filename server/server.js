// Based on: https://www.mongodb.com/languages/mern-stack-tutorial

const express = require("express"); 
const app = express();
const cors = require("cors")
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./rountes/record"));

// Conexión con el driver

const dbo = require("./db/conn");

app.listen(port, () => {

    // Iniciar la base de datos cuando el server inicia
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    
    console.log(`Server conectado en el puerto ${port}`);

});
