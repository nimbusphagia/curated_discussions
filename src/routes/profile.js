import { Router } from "express";
import { isAuth } from "./authMiddleware.js";
import { profileGet } from "../controllers/profile.js";

const profileRoute = new Router();
profileRoute.get('/profile', isAuth, profileGet);

export default profileRoute;
