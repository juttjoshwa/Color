import mongoose from "mongoose";


const ColorSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true 
    }
  
})

const Color = mongoose.model("Color",ColorSchema);
export default Color;