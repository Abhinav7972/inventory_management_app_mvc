import UserModel from "../models/user.model.js";
import productModel from "../models/product.model.js";



export default class UserController
{
    getRegister(req,res)
    {
        res.render("Register");
    }

    getLogin(req,res)
    {
        res.render("login",{errorMessage : null});
    }

    postRegister(req,res)
    {
        const {name,email,password} = req.body;
        UserModel.add(name,email,password);
        res.render("login",{errorMessage : null});
    }


    postLogin(req,res)
    {
        const {email,password} = req.body;
        const user =  UserModel.isvalidUser(email,password)
        if(!user)
        {
            return res.render("login",{errorMessage : "Invalid credentials"});
        }
        req.session.userEmail=email;
        var products = productModel.get()
        res.render("products",{products : products});
    }
}