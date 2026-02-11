import { usermodel } from "../models/Usermodel.js";


export const checkAuthor=async (req,res,next)=>{
    let authorid=req.params.authorId || req.body?.author
        let author=await usermodel.findById(authorid)
        if(!author){
            const err=new Error("Invalid email or role");
            err.status=401;
            throw err;
        }
        if( author.role!="AUTHOR"){
            return res.status(403).json({message:"user is not an  author"})
        }
        //if author is blocked by admin
        if(!author.isActive){
            return res.status(403).json({message:"author account  is not acxtive"})
        }
        next()
}

