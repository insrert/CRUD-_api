const mongoose = require("mongoose")
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        unique: true,
        required: true
    },

    address: {
        type: String,
        required: true
    }
})


// we will create new collection

const Student = new mongoose.model("Studentsdata", studentSchema)
module.exports = Student