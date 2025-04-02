const express= require("express");
const bcrypt = require("bcryptjs");
const User = require("./Schema");

const router = express.Router();
router.get('/get', async (req, res) => {
    try {
        const data = await User.find();  
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
try{
    
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newUser = new User({username,email,password})
await newUser.save()
res.status(200).send(newUser);
}
catch(e){
  res.status(400).send({e})
}
})
module.exports=router