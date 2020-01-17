const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/healthcheck/", async (req, res) => {
  const blob = { ok: "dokey", colors: ["crimson", "lemon chiffon", "chartreuse"] };
  res.send(blob);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
