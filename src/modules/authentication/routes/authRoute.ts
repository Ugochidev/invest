import { Router } from "express";

// import VerifyEmail from "../controllers/VerifyEmail.controller";
// import CreatePin from "../controllers/CreatePin.controller";
// import ChangePin from "../controllers/ChangePin.controller";
import VerifyPhoneNumber from "../controllers/verifyPhone.controller";
// import CreateUser from "../controllers/CreateUser.controller";
// import ForgetPassword from "../controllers/ForgotPassword.controller";
// import LoginUser from "../controllers/LoginUser.controller";
// import LoginWithPin from "../controllers/LoginWithPin.controller";
// import ResetPassword from "../controllers/ResetPassword.controller";
// import ChangePassword from "../controllers/ChangePassword.controller";
// import VerifyLogin from "../controllers/VerifyLogin.controller";

// import validateLoginUser from "../validators/loginValidator";
// import validateCreateUser from "../validators/userCreateValidator";
// import validatePhoneNumber from "../validators/phoneNumberValidator";
// import pinValidator from "../validators/pinValidator";

// import validateResetPassword from "../validators/resetPasswordValidator";
// import verifyPhoneNumberValidator from "../validators/verifyPhoneNumberValidator";
// import changePasswordValidator from "../validators/changePasswordValidator";
// import emailValidator from "../validators/emailValidator";
// import changePinValidator from "../validators/changePinValidator";
// import pinLoginValidator from "../validators/pinLoginValidator";
// import otpValidator from "../validators/otpValidator";

// import auth from "../../../shared/middlewares/auth";

const router = Router();
const verifyPhoneNumber = new VerifyPhoneNumber();
// const verifyEmail = new VerifyEmail();
// const createUser = new CreateUser();
// const bvnValidation = new BvnValidation();
// const login = new LoginUser();
// const forgetPassword = new ForgetPassword();
// const resetPassword = new ResetPassword();
// const changePassword = new ChangePassword();
// const createPin = new CreatePin();
// const changePin = new ChangePin();
// const loginWithPin = new LoginWithPin();
// const verifyLogin = new VerifyLogin();

// router.post("/", validateCreateUser, createUser.create);
// router.post("/login", validateLoginUser, login.session);
// router.post("/forgotPassword", validatePhoneNumber, forgetPassword.sendOtp);
// router.patch("/resetPassword", validateResetPassword, resetPassword.reset);
router.post("/phoneNumber",  verifyPhoneNumber.sendOtp);
// router.post(
//   "/verifyPhoneNumber",
//   verifyPhoneNumberValidator,
//   verifyPhoneNumber.verifyOtp
// );
// router.patch(
//   "/changePassword",
//   auth,
//   changePasswordValidator,
//   changePassword.update
// );
// router.post("/verifyEmail", emailValidator, verifyEmail.sendOtp);
// router.patch("/verifyEmail", otpValidator, verifyEmail.verifyOtp);
// router.post("/createPin", auth, pinValidator, createPin.create);
// router.patch("/changePin", auth, changePinValidator, changePin.update);
// router.post("/loginWithPin", pinLoginValidator, loginWithPin.session);
// router.post("/verifyLogin", verifyPhoneNumberValidator, verifyLogin.verifyOtp);

export default router;
