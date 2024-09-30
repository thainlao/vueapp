import { Router } from "express";
import { createOrder, deleteOrder, getAllOrders, updateOrderStatus } from "../controllers/OrderController.js";

const router = Router();

router.post('/create', createOrder);
router.get('/allorders', getAllOrders);
router.put('/update', updateOrderStatus);
router.post('/delete', deleteOrder);

export default router