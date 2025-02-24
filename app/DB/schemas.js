const {Schema} = require("mongoose") 

const productSchema = new Schema(
    {

    }
,{timestamps:{createdAt:"createdAt"}})

const userSchema = new Schema(
    {

    }
,{timestamps:{createdAt:"createdAt"}})

const transactionSchema = new Schema(
    {

    }
,{timestamps:{createdAt:"createdAt"}})

export {productSchema,userSchema,transactionSchema}