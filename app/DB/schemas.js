const {Schema} = require("mongoose") 

const productSchema = new Schema(
    {
    image:{type:Array},
    name:{type:String,required:true},
    description:{type:String,required:true},
    brand:{type:String,required:true},
    sex:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    seller:{type:String,required:true},
     createdAt:Date
    }
,{timestamps:{createdAt:"createdAt"}})

const userSchema = new Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        phoneNumber:{type:Number,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        createdAt:Date
    }
,{timestamps:{createdAt:"createdAt"}})

const transactionSchema = new Schema(
    {

    }
,{timestamps:{createdAt:"createdAt"}})

module.exports = {productSchema,userSchema,transactionSchema}