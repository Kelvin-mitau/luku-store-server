const {model,models} = require("mongoose")
const { productSchema,transactionSchema,userSchema } = require("./schemas")


const Product = models.Product || model("Product",productSchema)
const Transaction = models.Transaction || model("Transaction",transactionSchema)
const User = models.User || model("User",userSchema)