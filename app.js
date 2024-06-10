const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})
app.get("/view",(req,res)=>{
    res.send("Welcome to view page")
})
app.listen(8086,()=>{
    console.log("server started")
})