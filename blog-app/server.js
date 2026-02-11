import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { userRoute } from './API\'s/UserAPI.js'
import { AuthorRoute } from './API\'s/AuthorAPI.js'
import { AdminRoute } from './API\'s/AdminAPI.js'

import cookieParser from 'cookie-parser'
import { commonRouter } from './API\'s/CommonAPI.js'
config()//process.env
// creation of http server
const app=exp()
// add body parser middleware
app.use(exp.json())
// add cookie parser middleware
app.use(cookieParser())
// connect api's
app.use('/user-api',userRoute)
app.use('/author-api',AuthorRoute)
app.use('/admin-api',AdminRoute)
app.use('/common-api',commonRouter)
// connecting to database
const connectDB=async()=>{
    try{
    await connect(process.env.DB_URl)
    console.log("database connection success")
    app.listen(process.env.PORT,()=>console.log("server started"))
    }
    catch(err){
        console.log("error in db connection",err)
    }

}
connectDB()

//logout for user,author and admin
// app.post('/logout',(req,res)=>{
//     res.clearCookie('token',{
//         httpOnly:true,
//         secure:true,
//         sameSite:'none'
//     })
//     res.status(200).json({message:"logged out successfully"})
// })
//dealing with invalid path
app.use((req,res,next)=>{
    res.json({message:req.url+"Invalid path"})
})
// error handling middleware
app.use((err,req,res,next)=>{
    console.log("error is",err)
    res.json({message:"error",reason:err.message})
})