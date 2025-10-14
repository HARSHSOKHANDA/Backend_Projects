import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    const bandName = req.body["sname"] + req.body["pname"];
    res.send(`<h1>Your brand Name is :</h1><h2>${bandName}🤘</h2>`);
});

app.listen(port, () => {
    console.log(`Server running on port : http://localhost:${port}`);
});