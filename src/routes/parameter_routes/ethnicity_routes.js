import { Router } from "express";
import { EthnicityController } from "../../controllers/parameter_controllers/EthnicityController.js";

export const EthnicityRouter = Router();

EthnicityRouter.get("/ethnicities", EthnicityController.getAll);
EthnicityRouter.get("/ethnicities/:id", EthnicityController.getById);
EthnicityRouter.post("/ethnicities", EthnicityController.create);
EthnicityRouter.put("/ethnicities/:id", EthnicityController.update);
EthnicityRouter.delete("/ethnicities/:id", EthnicityController.delete);

