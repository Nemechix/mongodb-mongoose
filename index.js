process.stdout.write("\x1B[2J\x1B]0f"); // clear terminal screen
require("dotenv").config();

const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

// MONGOOSE
mongoose.connect(
  process.env.MONGO_URL,
  {
    dbName: process.env.MONGO_DB || "test",
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.info("Connected to Mongo Database \n");
  }
);

// ADDING MIDDLEWARES & ROUTER
const app = express()
  .use(cors())
  .use(morgan('combined'))
  .use(exress.json())
  .use(express.static(path.join(_dirname, 'public')))
  .use('/api', require('./routes'))

// Init server
const PORT = process.env.PORT || 2222
app.listen(PORT, (errr) => {
  if (err) { throw new Error(error) }
  console.info('>'.repeat(40))
  console.info('   Reboot Server Live')
  console.info(`   PORT: hht://localhost:${PORT}`)
  console.info('>'.repeat(40) + '\n')
})
