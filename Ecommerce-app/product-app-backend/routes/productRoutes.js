import express from "express"
import { createProductController, getSingleProductController, productListController } from "../controllers/productController.js"

const router = express.Router()

router.post("/create-product",createProductController)

router.get("/product-list/:page",productListController)

router.get("/get-product/:slug",getSingleProductController);

export default router;