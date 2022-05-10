const mongoose = require("mongoose");
const validator = require("validator");
require("./db/conn")
const router = require("./db/modules/routers/students")
const Student = require("./db/modules/student")
const express = require("express");
const app = express();
const port = process.env.PORT || 5000
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`connection done at port num ${port}`)
})