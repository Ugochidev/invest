import { Request, Response, NextFunction } from "express";
import VerifyPhoneNumberService from "../services/VerifyPhoneNumberService";

class VerifyPhoneNumber {
  async sendOtp(req: Request, res: Response): Promise<Response> {
    try {
      const { phone_number } = req.body;

      const verifyPhoneNumberService = new VerifyPhoneNumberService();

      const otp = await verifyPhoneNumberService.execute({
        phone_number,
      });

      return res.status(200).json({
        success: true,
        message: "Otp sent successsfully...",
        phone_number,
        otp,
      });
    } catch (error: any) {
      console.log(error);

      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  }

  //   async verifyOtp(req: Request, res: Response): Promise<Response> {
  //     try {
  //       const { otp, phone_number } = req.body;
  //       const verifyPhoneNumberService = new VerifyPhoneNumberService();

  //       const tempId = await verifyPhoneNumberService.execute2({
  //         phone_number,
  //         otp,
  //       });
  //       return res.status(200).json({
  //         success: true,
  //         message: "PhoneNumber Verified successsfully...",
  //         tempId,
  //       });
  //     } catch (error: any) {
  //       return res.status(error.statusCode || 500).json({
  //         success: false,
  //         message: error.message,
  //       });
  //     }
  //   }
}

export default VerifyPhoneNumber;
