import {Schema,model} from 'mongoose';
const productschema=new Schema({
    name:{
        type:String,required:[true,"name is required"]
    },
    price:{
        type:Number,required:[true,"price is required"]
    },
    brand:{
        type:String,required:[true,"brand is required"]
    }
})
export const productmodel=new model("product",productschema)
