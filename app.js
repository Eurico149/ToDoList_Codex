const express = require("express");
const app = express();
require("./conn/conn");
const cors = require("cors");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.use("/api/v1", auth);
app.use("/api/v2", list);
const port = process.env.PORT || 3000;


app.listen(3000, () => {
    console.log(`Rodando: http://localhost:${port}`);
});

app.get("/", (req,res) => {
    res.send("Hello");
});