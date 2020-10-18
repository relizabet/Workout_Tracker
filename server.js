const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

require("dotenv").config();


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
