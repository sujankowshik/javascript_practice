import exp from 'express'
import { articlemodel } from '../models/Articlemodel.js'
import { usermodel } from '../models/Usermodel.js'
import { verifytoken } from '../middlewares/verifyToken.js'
export const AdminRoute=exp.Router()
//Authenticate admin


//block users
AdminRoute.put('/block/:userId',verifytoken,async(req,res)=>{
    let userId=req.params.userId
    let user=await usermodel.findById(userId)
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    user.isActive=false
    await user.save()
    res.status(200).json({message:"user blocked successfully"})
})
// unblock users
AdminRoute.put('/unblock/:userId',verifytoken,async(req,res)=>{
    let userId=req.params.userId
    let user=await usermodel.findById(userId)
    if(!user){
       return res.status(404).json({message:"user not found",payload:user})

    }
    user.isActive=true
    await user.save()
    res.status(200).json({message:"user unblocked successfully",payload:user})
})



