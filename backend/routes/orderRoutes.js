import express from "express";
import {
  createOrder,
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

export default router;
