"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controllers_1 = require("../controllers/Controllers");
const router = (0, express_1.Router)();
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
//Test Routes
router.get("/", (req, res) => {
    res.send("Teste realizado com sucesso!");
});
//Admin Routes
router.get('/admin/get', asyncHandler(Controllers_1.AdminController.get));
exports.default = router;
