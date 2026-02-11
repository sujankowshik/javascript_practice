import exp from 'express'
import {register,authenticate} from '../services/authService.js'
import { articlemodel } from '../models/Articlemodel.js';
export const userRoute=exp.Router()

//register user 
userRoute.post('/users',async(req,res)=>{
    // get user obj from req
    let userobj=req.body;
    //call register
    const newuserobj=await register({...userobj,role:"USER"})
    res.status(200).json({message:"user created",payload:newuserobj})
})
// authenticate user
// userRoute.post("/authenticate",async(req,res)=>{
//     let userCred=req.body
//     let {token,user}=await authenticate(userCred)
//     res.cookie("token",token,{
//         httpOnly:true,
//         sameSite:"lax",
//         secure:false,
//     })
//     res.status(200).json({message:"authenticated",payload:user})
// })
// read all articles
userRoute.get('/articles',async(req,res)=>{
    let articles=await articlemodel.find().populate('author','name email')
    res.status(200).json({message:"articles are:",payload:articles})
})
// add comment to an article
userRoute.put('/comment',async(req,res)=>{
    let {user,articleid,comment}=req.body
    let article=await articlemodel.findByIdAndUpdate(articleid,{$push:{comments:{user:user,comment:comment}}},{new:true})
    // add the comment
    res.status(200).json({message:"comment added",payload:article})
})