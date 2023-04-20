const express = require("express");

const routes = require("./routes/index.js");
require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// JSON
app.use(
  express.urlencoded({ extended: true })
);
app.use(express.json());

app.use(routes);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get("/", (req, res) => {
  res.send("I'm Working!!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
