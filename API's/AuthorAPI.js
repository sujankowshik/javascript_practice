import exp from 'express'
import {register,authenticate} from '../services/authService.js'
import { usermodel } from '../models/Usermodel.js';
import { articlemodel } from '../models/Articlemodel.js';
import { checkAuthor } from '../middlewares/checkAuthor.js';
import { verifytoken } from '../middlewares/verifyToken.js';
export const AuthorRoute=exp.Router()
// register author
AuthorRoute.post('/users',async(req,res)=>{
    // get user obj from req
    let userobj=req.body;
    //call register
    const newuserobj=await register({...userobj,role:"AUTHOR"})
    res.status(200).json({message:"author created",payload:newuserobj})
})
//authenticate author
// AuthorRoute.post("/authenticate",async(req,res)=>{
//     let userCred=req.body
//     let {token,user}=await authenticate(userCred)
//     res.cookie("token",token,{
//         httpOnly:true,
//         sameSite:"lax",
//         secure:false,
//     })
//     res.status(200).json({message:"authenticated",payload:user})
// })
//create article
AuthorRoute.post("/articles",async(req,res)=>{
    let authorobj=req.body
    let author=await usermodel.findById(authorobj.author)
    if(!author){
        const err=new Error("Invalid email or role");
        err.status=401;
        throw err;
    }
    const articledoc=await articlemodel(authorobj)
    articledoc.save()
    res.status(201).json({message:"article created",payload:authorobj})
})
//read articles of author
AuthorRoute.get('/articles/:authorId',verifytoken,checkAuthor,async(req,res)=>{
    let authorid=req.params.authorId
    let author=await usermodel.findById(authorid)
    // if(!author){
    //     const err=new Error("Invalid email or role");
    //     err.status=401;
    //     throw err;
    // }
    const articles=await articlemodel.find({author:authorid})
    res.status(201).json({message:"articles are:",payload:articles})
})
//edit article
AuthorRoute.put('/articles',async(req,res)=>{
    
    let {articleId,author,title,category,content}=req.body;
    let articleofDB=await articlemodel.findOne({_id:articleId,author:author})
    if(!articleofDB){
        return res.status(401).json({message:"Article not found"})
    }
    let updatedArticle=await articlemodel.findByIdAndUpdate(
        articleId,
        {
           $set:{title,content}
        },
        {
            new:true,
            runValidators:true
        }
    )
    res.status(201).json({message:"article updated",payload:updatedArticle})



})
//delete(soft) article

AuthorRoute.put('/delarticle',async(req,res)=>{
    let {author,articleId}=req.body
    let articleofDB=await articlemodel.findOne({_id:articleId,author:author})
    if(!articleofDB){
        return res.status(401).json({message:"Article not found"})
    }
    let newarticledoc=await articlemodel.findByIdAndUpdate(articleId,{$set:{isArticleActive:false}},{new:true,runValidators:true})
    res.status(201).json({message:"article blocked",payload:newarticledoc})
})