import  express  from "express";
import  Cors from "cors";
import mongoose from "mongoose"
import User from "./Model/User.js";

const app = express();
app.use(express.json());
app.use(Cors());

const PORT = 5000

app.listen(PORT ,()=>console.log('server ok'))

const DB_url = "mongodb+srv://MREN:MREN@cluster0.jzydmfw.mongodb.net/fristDB?retryWrites=true&w=majority"

app.get("/new_msg",async (req, res) => res.send("heloo from me"))


mongoose
.connect(DB_url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("DB_conected"))
.catch(Error => console.log(Error))

const AddUser = async ()=>{
    const user = new User({name : "joshwa" , Email: "joshwa@gmail.com"})
    try{
        await user.save()
        console.log(user)
    }catch(Error) {console.log(Error)}
}


// AddUser()


const deleteUser = async () => {
   try {
    await User.findByIdAndDelete('63a91b14959981718dda9445')
    }catch (Error){console.log(Error)}
}
 
deleteUser()

