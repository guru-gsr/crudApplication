import express from "express";
import * as rankingController from '../controllers/rankingController.js';


const router=express.Router();


router.get('/',rankingController.getAllPlayers);
router.get('/:id',rankingController.getPlayerById);
router.post('/',rankingController.createPlayer);
router.put('/:id', rankingController.updatePlayerById);
router.delete('/:id',rankingController.deletePlayer);


export default router;