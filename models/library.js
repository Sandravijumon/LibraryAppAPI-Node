const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "author":String,
        "description":String,
        "price":String,

    }
)
let librarymodel=mongoose.Model("Libraries",schema)
module.exports={librarymodel}