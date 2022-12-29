import express  from "express";
import mongoose from "mongoose";
import cors from "cors"
import User from "../server/Model/User.js"
// import Color from "../server/Model/User.js";

const app = express()
app.use(express.json())
app.use(cors())



const PORT = 5000

app.listen(PORT,()=>console.log('server ok'))

app.post('/addcolor', async(req , res) => {
    const addedcolor = await User(req.body)
    addedcolor.save();
    res.status(201).json({ created:true})
    console.log(addedcolor)
})

app.get('/newpage', async(req,res)=> res.send("hello from user_1"))
app.get('/u', async(req,res)=> res.send("hello from user_2"))
app.get('/', async(req,res)=> res.send("hello from user"))

app.get("/user" , async (req, res)=>{
    const user = await User.find({})
    // console.log(user)
    res.status(200).json(user)
})



const DB_url = 'mongodb+srv://MREN:MREN@cluster0.jzydmfw.mongodb.net/DB_1?retryWrites=true&w=majority'

mongoose
.connect(DB_url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("DB_conected"))
.catch(Error => console.log(Error))

const AddColor = async ()=>{
   const user = new User({name : "joshwa"})
   try{
    await user.save()
    console.log(user)
   }catch(Error){console.log(Error)}
}

// AddColor()


 
