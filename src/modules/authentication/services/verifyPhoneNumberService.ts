import UserRepository from "../../users/models/repositories/UserRepository";
import Cache from "../../../shared/services/Redis";

class VerifyPhoneNumberService {
  private userRepository: UserRepository;
  private cache: Cache;

  constructor() {
    this.userRepository = new UserRepository();
    this.cache = new Cache();
  }
}


export default VerifyPhoneNumberService;