import { FirstConsultationsController } from "../controllers/InitialConsultationsController.js";
import { Router } from "express";
import { upload } from "../middlewares/uploadMiddleware.js";
import { authMiddleware } from "../middlewares/auth.js";


export const InitialConsultationsRouter = Router();

InitialConsultationsRouter.get('/primerasconsultas', FirstConsultationsController.getFirstConsultations);
InitialConsultationsRouter.get('/primerasconsultas/:id', FirstConsultationsController.getById);
InitialConsultationsRouter.get('/primerasconsultas/:status', FirstConsultationsController.getByStatus);
//InitialConsultationsRouter.post('/primerasconsultas', FirstConsultationsController.createFirstConsultations);
InitialConsultationsRouter.post('/primerasconsultas', upload.single("file"),FirstConsultationsController.createFirstConsultations);
InitialConsultationsRouter.put('/primerasconsultas/:id', FirstConsultationsController.update);
InitialConsultationsRouter.delete('/primerasconsultas/:id', FirstConsultationsController.delete);