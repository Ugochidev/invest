import { Router } from "express";

import VerifyPhoneNumber from "../controllers/verifyPhone.controller";

const router = Router();
const verifyPhoneNumber = new VerifyPhoneNumber();

router.post("/phoneNumber",  verifyPhoneNumber.sendOtp)

export default router;
