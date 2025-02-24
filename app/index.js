
const express =  require("express");
const passwordEncrypter = require("./middleware/passwordEncrypt");
const generateOTP = require("./functions/generate-otp")


const app = express()

app.post("/auth/sign-in",async (req,res) => {
    try {
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

app.post("/auth/sign-up",passwordEncrypter,async (req,res) => {
    try {
         
        const OTP = generateOTP()
        res.json({OTP}).status(200)
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

app.get("/products",async (req,res) => {
    try {
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})


app.listen(8080,() => {
    console.log("Listening on port 8080")
})