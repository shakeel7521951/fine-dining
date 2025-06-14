import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  updateOrderStatus,
  userOrders,
} from "../controller/orderController.js";

import auth from '../middleware/AuthMiddleWare.js'

const router = express.Router();

router.post("/create-order", auth, createOrder);
router.get("/my-orders", auth, userOrders);
router.get("/all-orders", auth, getAllOrders);
router.put("/:orderId/status", auth, updateOrderStatus);
router.delete('/delete-order/:orderId',auth,deleteOrder);

export default router;
