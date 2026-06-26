import UserModel from "../models/user.model.js";

export default class UserController
{
    getRegister(req,res)
    {
        res.render("Register");
    }

    getLogin(req,res)
    {
        res.render("login");
    }
}