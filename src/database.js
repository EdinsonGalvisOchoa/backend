const monngoose = require("mongoose")

URI=("mongodb://localhost/basededatoscrud")

monngoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true,
    //useFindAndModify:false

})

.then(db=>console.log("Base de datos conectadaa"))
.catch(error=>console.log(error))

module.exports = monngoose