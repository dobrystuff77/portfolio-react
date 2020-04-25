const express = require("express");
const app = express();

app.use(express.json());

///////////////////////////////////////////////////////////////////////////////
//POST/COMMENT
app.post("/message", (req, res) => {
  console.log("axios POST message");
});
////////////////////////////////////////////////////////////////////////////////
//GET/SHOWMORE
app.get("/showmore/:lastId", (req, res) => {
  // var lastId = req.params.lastId;
  // db.showMore(lastId).then(result => {
  //   res.json(result);
  // });
});
///////////////////////////////////////////////////////////////////////////////
//GET/DELETE
app.get("/delete/:imageId", (req, res) => {
  // var imageId = req.params.imageId;
  // Promise.all([
  //   db.deleteTags(imageId),
  //   db.deleteComments(imageId),
  //   db.deleteImage(imageId)
  // ])
  //   .then(data => {
  //     res.json({
  //       delete: "success"
  //     });
  //   })
  //   .catch(err => {
  //     console.log("err in deleteImage: ", err);
  //   });
});
///////////////////////////////////////////////////////////////////////////////
app.listen(process.env.PORT || 8080, () => console.log(`I'm listening.`));
