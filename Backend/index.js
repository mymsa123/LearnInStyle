const express=require('express')
const { connection } = require('./db')
const { userRouter } = require('./Routes/users.Routes')
const app=express()
app.use(express.json())
app.use('/users',userRouter)
app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to Mongo Atlas")
    }
    catch(err){
        console.log(err)
    }
})