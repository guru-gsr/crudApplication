import mongoose from "mongoose";

const playerSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required:true
    },
    ranking:{
        type:Number,
        required:true
    }
})

const Player=mongoose.model("Player", playerSchema)
export default Player