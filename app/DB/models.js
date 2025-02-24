const {model,models,connect} = require("mongoose")
const { productSchema,transactionSchema,userSchema } = require("./schemas")

connect("mongodb://localhost:27017/luku-store")

const Product = models.Product || model("Product",productSchema)
const Transaction = models.Transaction || model("Transaction",transactionSchema)
const User = models.User || model("User",userSchema)