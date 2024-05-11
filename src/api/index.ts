import express from "express";
import exampleRoutes from "../modules/example/_routes";
import handleErrors from "../shared/errors/handle-errors";

const router = express.Router();

router.use(exampleRoutes);

router.use(handleErrors);

export default router;