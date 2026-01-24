import { Router } from "express";
import { discussionGet, discussionsGet, newGet, newPost, commentPost } from "../controllers/discussions.js";


const discussionsRoute = new Router();
// Parent
discussionsRoute.get('/discussions', discussionsGet);

// Create discussion
discussionsRoute.get('/discussions/new', newGet);
discussionsRoute.post('/discussions/new', newPost);

// View discussion
discussionsRoute.get("/discussions/:id", discussionGet);
discussionsRoute.post('/discussions/comment', commentPost);


export default discussionsRoute;
