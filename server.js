const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/message", (req, res) => {
  console.log("req", req.body);
  if (
    req.body.name == undefined ||
    req.body.email == undefined ||
    req.body.message == undefined
  ) {
    console.log("empty message");
    res.json({ data: false });
  } else {
    res.json({ data: true });
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
