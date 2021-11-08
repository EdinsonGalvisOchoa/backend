const express =require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser")
require("./database")



app.set('Port',4000);

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors({origen:'*'}));
app.use("/usuario",require("./routes/Usuario.route"))
app.use("/productos",require("./routes/producto.route"))
app.use("/ventas",require("./routes/Ventas.route"))

app.listen(app.get('Port'),()=>{

    console.log("Servidor escuchando por el puerto", app.get('Port'));
});
