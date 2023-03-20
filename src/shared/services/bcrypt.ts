import bcrypt from "bcrypt";
import environment from "../../config/environment";

class Bcrypt {
  saltRounds: string | number;
  constructor() {
    this.saltRounds = environment.saltRounds;
  }

  async hash(data: string): Promise<string> {
    const hashedData = await bcrypt.hash(data, this.saltRounds);
    return hashedData;
  }

  async compare(data: string, hashedData: string): Promise<boolean> {
    const comparedData = await bcrypt.compare(data, hashedData);
    return comparedData;
  }
}
export default Bcrypt;
