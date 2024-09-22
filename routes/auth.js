const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/registrar", async (req,res) => {
    try{
        const {name, gender, idade, email, senha} = req.body;
        const hashsenha = bcrypt.hashSync(senha);
        const user = new User({name, gender, idade, email, senha: hashsenha});
        await user.save().then(() => res.status(200).json({user: user}));
    } catch (error) {
        res.status(400).json({message: "Usuario Ja Existe"});
    }
});

router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(400).json({message: "Email ou Senha Invalido!"});
        }
        const veriSenha = bcrypt.compareSync(req.body.senha, user.senha); 
        if (!veriSenha){
            return res.status(400).json({message: "Email ou Senha Invalido!"});
        }
        const {senha, ...others} = user._doc;
        res.status(200).json({others});
    } catch (error) {
        res.status(400).json({message: "Usuario Ja Existe"});
    }
});

router.put("/atualizaUser/:id", async (req,res) => {
    try{
        const {name, gender, idade, email, senha} = req.body;
        const veriUser = await User.findOne({email});
        if (veriUser) {
            const hashsenha = bcrypt.hashSync(senha);
            const user = await User.findByIdAndUpdate(req.params.id, {name, gender, idade, senha: hashsenha});
            user.save().then(() => res.status(200).json({message: "Usuário atualizado."}));
        } else {
            res.status(400).json({message: "Usuário não encontrado!"});
        }
    } catch (error){
        console.log(error);
        res.status(400).json({message: "Erro Inesperado"});
    }
});

module.exports = router;
