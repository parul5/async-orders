import express from "express";
import { CreateOrder } from '../controllers/shoppingController.js'

const router = express.Router();

router.post('/order', CreateOrder)

export { router as shoppingRoutes };