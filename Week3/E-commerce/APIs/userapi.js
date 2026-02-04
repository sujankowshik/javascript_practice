import exp from'express'
export const userapp=exp.Router()
import { usermodel } from '../modules/usermodule.js'
import { hash } from 'bcryptjs'
import { model } from 'mongoose'
import { productmodel } from '../modules/productmodule.js'
//  create user
userapp.post('/user',async(req,res)=>{
    // get newuser from body
    let newuser=req.body
    await new usermodel(newuser).validate()
    let newpassword=await hash(newuser.password,12)
    newuser.password=newpassword
    // create new user document
    // save user in database
    let newuserdoc=new usermodel(newuser)
    newuserdoc.save({validateBeforeSave:false})
    res.status(200).json({message:"user created",payload:newuserdoc})
})

// add items to the cart
userapp.put("/user-cart/user-id/:uid/product-id/:pid",async (req, res) => {
    const { uid, pid } = req.params
    // check user
    const user = await usermodel.findById(uid);
    if (!user) {
      return res.status(404).json({ message: "user not found" })
    }
    // check product
    const product = await productmodel.findById(pid);
    if (!product) {
      return res.status(404).json({ message: "product not found" })
    }
    // check if product already in cart
    const cartItem = user.cart.find(
      item => item.product.toString() === pid
    )
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      user.cart.push({product:pid,quantity:1})
    }
    await user.save()
    await user.populate("cart.product")
    res.status(200).json({message: "cart updated",payload: user})
  })


//  get user by id
userapp.get('/user/:id',async(req,res)=>{
    let userid=req.params.id
    let user=await usermodel.findById(userid).populate("cart.product", "name price");
    res.status(200).json(user)

})




// remove product from cart
userapp.delete(
  "/usercart/user-id/:uid/product-id/:pid",
  async (req, res) => {
    const { uid, pid } = req.params;

    // check user
    const user = await usermodel.findById(uid);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    // remove product from cart
    const updatedUser = await usermodel
      .findByIdAndUpdate(
        uid,
        { $pull: { cart: { product: pid } } },
        { new: true }
      )
      .populate("cart.product");

    res.status(200).json({
      message: "product removed from cart",
      payload: updatedUser
    });
  }
);