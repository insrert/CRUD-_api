const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/students-api")
    .then(() => {
        console.log("connection successfully")
    }).catch((e) => {
        console.log(e)
    })

module.export