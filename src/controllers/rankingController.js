import Player from "../models/player.models.js";

// export const getAllPlayers= async (req,res) =>{
//     res.status(200).json({msg:"getting all players"});
// };


export const getAllPlayers= async(req,res,next)=>{
      try {
        const players=await Player.find();
        res.json(players);
      } catch (error) {
        next(error)
      }
};


export const createPlayer=async(req,res,next) =>{
    const {name,country,ranking}=req.body;
    try {
        const player=new Player({name,country,ranking});
        const newplayer=await player.save();
    } catch (error) {
        next(error);
    }
}

export const getPlayerById= async(req,res,next)=>{
  const {id}=req.params;
  try {
    const player=await Player.findById(id);
    if(!player){
      return res.status(404).json({message: "Player not found"});
    }
    res.json(player);
  } catch (error) {
    next(error);
  }
}

export const updatePlayerById= async(req,res,next) =>{
    const {id}= req.params;
    const {name,country,ranking}=req.body;
    try {
       const player=Player.findById(id);
       if(!player){
        return res.status(400).json({message: "player not found"});
       }
   player.name=name;
   player.country=country;
   player.ranking=ranking;
   const updatedplayer= await player.save();
   res.json(updatedplayer);

    } catch (error) {
      next(error);
    }
}


export const deletePlayer= async(req,res,next) =>{
  const {id}= req.params;
  try {
    const player=await Player.findById(id);
    if(!player){
      return res.status(400).json({message: "player not found"});
     }
     await player,remove();
     res.json({message: "player deleted"});
  } catch (error) {
    next(error);
  }
}