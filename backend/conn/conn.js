const mongoose = require("mongoose");

const conn = async (req,res) => {
    try{
        await mongoose.connect("mongodb+srv://euricogabriel:jsbBGVPVrvmnqcTG@todo-list.89cnj.mongodb.net/")
        .then(() => {
            console.log("Conectado");
        });
    } catch (erro){
        res.status(400).json({message: "Nao Conectado"});
    }
};
conn()