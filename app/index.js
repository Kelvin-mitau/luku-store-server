
const express =  require("express");
const passwordEncrypter = require("./middleware/passwordEncrypt");
const generateOTP = require("./functions/generate-otp")


const app = express()

//Loging in
/* 
request body Example
{
    indentity:"email/username",
    password:"1234"
}
*/
app.post("/auth/sign-in",async (req,res) => {
    try {
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

//Creating account 
/* 
request body example:
{
    firstName:"first",
    lastName:"last",
    userName:"userName",
    phoneNumber:"0768****",
    email:"kelvin@gmail.com",
    password:"1234"
}
*/
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


//Querying products
//Endpoint example : /products?category=shorts or /products?brand=gucci
app.get("/products",async (req,res) => {
    try {
        const {category,brand,sex} = req.params()
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

//Creating new product
/* 
Request body example :
{
    pictures:["base64string","base64string"],
    name:"product-name",
    description:"lorem ipsum10",
    price:100,
    seller:"seller'sID",
}
*/
app.put("/products",async (req,res) => {
    try {
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

//Deleting product
/* 
Request body example : {id:1}
*/
app.delete("/products",async (req,res) => {
    try {
        const reqBody = await req.body
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

//Processing payment
/* 
Request body example : {phoneNumber:"0768***"}
*/
app.post("/payment",async (req,res) => {
     try {
        const reqBody = await req.body
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

app.listen(8080,() => {
    console.log("Listening on port 8080")
})