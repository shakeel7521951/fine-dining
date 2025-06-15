import express from "express";
import auth from '../middleware/AuthMiddleWare.js'
import { createMenu, deleteMenu, getAllMenuItems, updateMenu } from "../controller/menuController.js";

const router = express.Router();

router.post("/menu",auth, createMenu);        
router.get("/menu", getAllMenuItems);    
router.delete("/menu/:id", deleteMenu); 
router.put("/menu/:id", updateMenu); 

export default router;