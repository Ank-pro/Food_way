const UserModel = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    //fetch user details from body/frontend
    let {name,email,password} = req.body;
    //search for user (returns null if found else document)
    const user = await UserModel.findOne({email})

    if(user){
        return res.send("User Already exists.")
    }
    //hash password //generated salt
    const salt = await bcrypt.genSalt(10);
    //encrypt
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new UserModel({name,email,password : hashedPassword});
    const savedUser = await newUser.save();

    //jwt token
    const token = jwt.sign({userId : savedUser._id},'1234');
    
    console.log(req.body);
    return res.json({user : newUser, token})

}


const loginUser = (req,res)=>{
    console.log(req.body)
    res.send("Login")
}

module.exports = {registerUser,loginUser};