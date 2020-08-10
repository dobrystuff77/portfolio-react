const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const ses = require("./ses");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/message", (req, res) => {
  console.log("req", req.body);
  if (
    req.body.name == undefined ||
    req.body.email == undefined ||
    req.body.subject == undefined ||
    req.body.message == undefined
  ) {
    console.log("empty message");
    res.json({ data: false });
  } else {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;

    let messageContent = name + " <" + email + "> " + message;

    ses
      .sendEmail("dobrystuff77@gmail.com", messageContent, subject)
      .then(result => {
        console.log("result from sendEmail:", result);
        res.json({ data: true });
      })
      .catch(err => {
        console.log("err in sendEmail: ", err);
        res.json({ data: false });
      });
  }
});

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || port, () =>
  console.log(`Server started on port ${port}`)
);
