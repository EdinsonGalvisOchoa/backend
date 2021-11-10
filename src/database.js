const monngoose = require("mongoose")

URI=("mongodb+srv://galvised:Riachuelos2020++@basededatospagwebminist.0goxf.mongodb.net/test")

monngoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true,
    //useFindAndModify:false

})

.then(db=>console.log("Base de datos conectada", db.connection.name))
.catch(error=>console.log(error))

module.exports = monngoose