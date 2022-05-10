const express = require("express");
const router = new express.Router()
const Student = require('../student')
    //using Promises

// app.post("/students",(req,res)=>{
//     const user = new Student(req.body)
//using Promises
// user.save().then(()=>{
//     res.status(201).send(user)
// }).catch((e)=>{
//     res.status(400).send(e)
// })
//})


//using async and await POST request
router.post('/students', async(req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    } catch (e) {
        res.status(400).send(e)
    }
})

//using async and await GET request

router.get("/students", async(req, res) => {
    try {
        const StudentData = await Student.find()
        res.send(StudentData)
    } catch (e) {
        res.send(e)
    }
})

//GET request by ID
router.get("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id
        Studentsdta = await Student.findById(_id)
        if (!Studentsdta) {
            return res.status(404).send()

        } else {
            res.send(Studentsdta)
        }

    } catch (e) {
        res.status(500).send(e)
    }
})


//PUT & Patch 
router.patch("/students/:id", async(req, res) => {
        try {
            const _id = req.params.id
            updatestudent = await Student.findByIdAndUpdate(_id, req.body)
            if (!updatestudent) {
                return res.status(404).send()

            } else {
                res.send(updatestudent)
            }

        } catch (e) {
            res.status(500).send(e)
        }
    })
    //DELETE
router.delete("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id
        deletestudent = await Student.findByIdAndDelete(_id)
        if (!deletestudent) {
            return res.status(404).send()

        } else {
            res.send(deletestudent)
        }

    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router