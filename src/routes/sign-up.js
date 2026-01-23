import { Router } from "express";
import { signupGet, signupPost } from "../controllers/sign-up.js";

const signupRouter = new Router();
signupRouter.get('/sign-up', signupGet);
signupRouter.post('/sign-up', signupPost);

export default signupRouter;
