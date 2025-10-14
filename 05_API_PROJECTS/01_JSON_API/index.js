import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
const app = express();
const port = 3000;

let recipes = [];
try {
  const jsonData = fs.readFileSync("recipe.json", "utf-8");
  recipes = JSON.parse(jsonData);
} catch (err) {
  console.error("Error reading recipe.json:", err);
}
let data;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: data });
});

app.post("/recipe", (req, res) => {
  switch (req.body.choice) {
    case "chicken":
      data = recipes[0];
      break;
    case "beef":
      data = recipes[1];
      break;
    case "fish":
      data = recipes[2];
      break;
    default:
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
