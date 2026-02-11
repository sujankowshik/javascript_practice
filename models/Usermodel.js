import {Schema,model} from 'mongoose'

const UserSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"]
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:[true,"E-mail  is required"],
        unique:[true,"email already existed"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    profileimageUrl:{
        type:String,
    },
    role:{
        type:String,
        enum:["AUTHOR",'USER','ADMIN'],
        required:[true,"{Value} is an invalid role"]
    },
    isActive:{
        type:Boolean,
        default:true
    }
    

},{
    timestamps:true,
    strict:"throw",
    versionKey:false
})

export const usermodel=model("user",UserSchema)