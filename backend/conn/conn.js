require("dotenv").config();
const mongoose = require("mongoose");

const conn = async (req,res) => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true, 
            useUnifiedTopology:true
        })
        .then(() => {
            console.log("Conectado");
        });
    } catch (erro){
        res.status(400).json({message: "Nao Conectado"});
    }
};
conn()