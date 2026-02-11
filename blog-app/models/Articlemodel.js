import {Schema,model} from 'mongoose'
// create user comment schema
const userCommentSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,// for reference
        ref:'user'
    },
    comment:{
        type:String
    }
})

const articleSchema=new Schema({
   author:{
    type:Schema.Types.ObjectId,
    req:"user",
    required:[true,"Author Id required"]
   },
   title:{
    type:String,
    required:[true,"Title is required"]
   } ,
   category:{
    type:String,
    required:[true,"Category is required"]
   } ,
   content:{
    type:String,
    required:[true,"Category is required"]
   } ,
   title:{
    type:String,
    required:[true,"content is required"]
   } ,
   comments:[userCommentSchema],
   isArticleActive:{
    type:Boolean,
    default:true
   }
},{

    timestamps:true,
    strict:"throw",
    versionKey:false


})

export const articlemodel=model("article",articleSchema)