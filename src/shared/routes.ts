import { Router } from "express";
import authRoutes from "../modules/authentication/routes/authRoute";
// import userRoutes from "../modules/users/routes/users.routes";

const router = Router();

router.use("/auth", authRoutes);


export default router;
