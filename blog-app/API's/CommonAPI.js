import exp from 'express'
import { authenticate } from '../services/authService.js'
import { usermodel } from '../models/Usermodel.js'
import { hash,compare } from 'bcryptjs'
export const commonRouter=exp.Router()

commonRouter.post("/authenticate",async(req,res)=>{
     let userCred=req.body
        let {token,user}=await authenticate(userCred)
        res.cookie("token",token,{
            httpOnly:true,
            sameSite:"lax",
            secure:false,
        })
        res.status(200).json({message:"authenticated",payload:user})
})

commonRouter.get("/logout",async(req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,
        secure:true,
        sameSite:'none'
    })
    res.status(200).json({message:"logged out successfully"})

})

// route for changing the password with the help of old password
commonRouter.put('/change',async(req,res)=>{
    //get current password and new password
    //check the current password is correct
    //replace the new password with old password

    let {email,password,newpassword}=req.body
    let user=await usermodel.findOne({email:email})
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    let isMatch=await compare(password,user.password)
    if(!isMatch){
        return res.status(401).json({message:"password not matched"})
    }
    const hashedPassword=await hash(newpassword,10)
    user.password=hashedPassword
    await user.save()
    res.status(200).json({message:"password changed successfully"})


})