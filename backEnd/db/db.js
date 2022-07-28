const mongoose = require(`mongoose`);
require(`dotenv`).config();

const conection = async ()=>{
    try{



         await mongoose.conect (proces.env.MONGO_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        


         })
         console.log("base de datos conectada")
    }
    catch {
        console.log("no se pudo establecr la conexion")
    }
}
module.exports = {conection}