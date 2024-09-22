const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

router.post("/addTodo", async (req,res) => {
    try{
        const {title, body, checkbox, email} = req.body;
        const veriUser = await User.findOne({email});
        if (veriUser) {
            const list = new List({title, body, checkbox, user: veriUser});
            await list.save().then(() => res.status(200).json({list}));
            veriUser.list.push(list);
            veriUser.save();
        }
    } catch (error){
        console.log(error);
        res.status(400).json({message: "Erro Inesperado"});
    }
});

router.put("/atualizaTodo/:id", async (req,res) => {
    try{
        const {title, body, checkbox, email} = req.body;
        const veriUser = await User.findOne({email});
        if (veriUser) {
            const list = await List.findByIdAndUpdate(req.params.id, {title, body, checkbox});
            list.save().then(() => res.status(200).json({message: "Todo Atualizada"}));
        } else {
            res.status(400).json({message: "Todo Nao encontrada"});
        }
    } catch (error){
        console.log(error);
        res.status(400).json({message: "Erro Inesperado"});
    }
});

router.delete("/delTodo/:id", async (req,res) => {
    try{
        const {email} = req.body;
        const veriUser = await User.findOneAndUpdate({email}, {$pull: {list: req.params.id}});
        if (veriUser) {
            await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({message : "Todo Deletada"}));
        }
    } catch (error){
        console.log(error);
        res.status(400).json({message: "Todo Nao encontrada"});
    }
});

router.get("/getUserTodo/:id", async (req,res) => {
    try {
        const list = await List.find({user: req.params.id}).sort({createdAt: -1});
        if(list.length !== 0){
            res.status(200).json({list});
        } else {
            res.status(200).json({message: "Sem Todo"});
        }
    } catch (error){
        console.log(error);
        res.status(400).json({message: "Erro Inesperado"});
    }
    
});

router.get("/getTodo/:id", async (req,res) => {
    try{
        const list = await List.findOne({_id: req.params.id});
        if(list){
            res.status(200).json({list});
        } else {
            res.status(400).json({message: "Todo Nao encontrada"});
        }
    } catch (error){
        console.log(error);
        res.status(400).json({message: "Todo Nao encontrada"});
    }
})

module.exports = router;