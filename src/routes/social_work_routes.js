import { Router } from "express";
import { SocialWorkController } from "../controllers/SocialWorkController.js";
import { authMiddleware } from "../middlewares/auth.js";

export const SocialWorkRouter = Router();

SocialWorkRouter.get("/social-work", SocialWorkController.getAll);
SocialWorkRouter.get("/social-work/:id", SocialWorkController.getById);
SocialWorkRouter.get("/social-work/user/:initCode", SocialWorkController.getUserIdBySocialWork);
SocialWorkRouter.post("/social-work", authMiddleware, SocialWorkController.create);
SocialWorkRouter.put("/social-work/:id", SocialWorkController.update);
SocialWorkRouter.delete("/social-work/:id", SocialWorkController.delete);


