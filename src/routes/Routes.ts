import { Router } from "express";

import { AdminController } from "../controllers/Controllers";

const router = Router();

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

//Test Routes
router.get("/", (req: any, res: any) => {
    res.send("Teste realizado com sucesso!");
});

//Admin Routes
router.get('/admin/get', asyncHandler(AdminController.get));

export default router;