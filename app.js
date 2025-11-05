const express = require("express");

const app = express();

// Importo una porta internet
const port = 3001;

const movieRouter = require("./routers/movieRouter");


const notFound = require("./middlewares/notFound");

const errorServer = require("./middlewares/errorServer");

const imagePath = require("./middlewares/imagePath");

const cors = require("cors");

app.use(cors({ origin: "*" }));


app.use(express.json());


app.use(express.static("public"));


app.use(imagePath);

app.get("/api", (req, res) => {
  console.log("Hai richiesto la home page");
  res.send("<h1>Home page</h1>");
});


app.use("/api/movies", movieRouter);


app.use(errorServer);


app.use(notFound);


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
