import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersSideMenu } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersSideMenu);

export default router;
