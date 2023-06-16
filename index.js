const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({
    data: null,
    message: "Success",
  });
});

app.listen(3000, () => {
  console.log(`Service running at port 3000`);
});
