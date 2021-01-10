const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const app = express()

dotenv.config({ path: "./config/config.env" });

/**
 * Middlewares
 */
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

/**
 * Routes
 */
app.use("/api/v1", require("./routes/medias"));

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `MyAnimeInfo server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);