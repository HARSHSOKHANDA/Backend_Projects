import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import path from "path";

inquirer
  .prompt([
    {
      message: "Type your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));
    fs.writeFile("QR.txt", url, (err) => {
      if (err) throw err;
      console.log("QR code saved as qr-image.png");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong", error);
    }
  });
