import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {usermodel} from "../models/Usermodel.js"

//register function

export const register=async (userobj)=>{
    //create document
    const userDoc =new usermodel(userobj);
    //validate for empty passwords
    await userDoc.validate();
    //hash and replace the plain password
    userDoc.password=await bcrypt.hash(userDoc.password,10)
    //save
    const created=await userDoc.save();
    //convert document to object to remove password
    const newuserobj=created.toObject();
    //remove password
    delete newuserobj.password;
    //return user obj without password
    return newuserobj
}

export const authenticate=async ({email,password})=>{
    const user=await usermodel.findOne({email});
    if(!user){
        const err=new Error("Invalid email or role");
        err.status=401;
        throw err;
    }
    // if user valid,but blocked by admin
    if(user.isActive===false){
        const err=new Error("Your account blocked.Plz contact Admin")
        err.status=403
        throw err
    }

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        const err=new Error("Invalid password");
        err.status=401;
        throw err;
    }
    //generate token
    const token=jwt.sign({userId:user._id,
        role:user.role,email:user.email},
        process.env.JWT_SECRET,{
            expiresIn:"1h",
    })

    const userobj=user.toObject();
    delete userobj.password;

    return {token,user:userobj}
}