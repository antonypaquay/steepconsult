const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

//Static file declaration
app.use(express.static(path.join(__dirname, "client/build")));
//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}
//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});
//start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.post("/api/form", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "vilma.mcclure6@ethereal.email",
      pass: "qtcg4hUvmy8dJ6GRzG"
    }
  });

  var mailOptions = {
    from: data.email,
    to: "letsdo-it@steepconsult.com",
    subject: `${data.emailType}`,
    attachments: [
      {
        filename: "steep-export.xml",
        content: `${data.name} ${data.email} ${data.linkedin}`
      }
    ],
    html: `
    <h1>Steep Consult</h1>
    <h3>Subject</h3>
    <p>${data.option}</p>
    <h3>From</h3>
    <p>${data.name}</p>
    <p>${data.email}</p>
    <p>${data.linkedin}</p>
    <p>${data.spontaneous}</p>
    <h3>Message</h3>
    <p>${data.message}</p>
    `
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
      console.log("Your email has been sent to 'letsdo-it@steepconsult.com'. Thanks!");
    }
    smtpTransport.close();
  });
});
