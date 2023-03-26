import UserRepository from "../../users/models/repositories/UserRepository";
import Cache from "../../../shared/services/Redis";
import IPhoneNumberDTO from "../dtos/IPhoneNumberDTO";
import AppError from "../../../shared/utils/AppError";
import { generateOTP, minutesToSeconds } from "../../../shared/utils";

class VerifyPhoneNumberService {
  private userRepository: UserRepository;
  private cache: Cache;

  constructor() {
    this.userRepository = new UserRepository();
    this.cache = new Cache();
  }
  async execute({ phone_number }: IPhoneNumberDTO): Promise<{ otp: string }> {
    try {
      console.log(34215);
      
      const user = await this.userRepository.findByPhoneNumber(phone_number);
      console.log(78654389, user);

      if (user) {
        throw new AppError("Phone Number Exists!", 401);
      }
      const cacheExpiry = minutesToSeconds(10);
      const cachedData = await this.cache.get(phone_number);
      if (cachedData) {
        cachedData.otp = generateOTP();
        this.cache.set(phone_number, cachedData.otp, cacheExpiry);

        return { otp: cachedData.otp };
      }
      const otp = generateOTP();
      this.cache.set(phone_number, otp, cacheExpiry);
      return { otp: otp };
    } catch (error: any) {
      console.log(error);

      throw new AppError(error);
    }
  }
}

export default VerifyPhoneNumberService;
