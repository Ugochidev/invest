import { v4 as uuid } from "uuid";
import { hash } from "bcrypt";

import UserRepository from "../../modules/users/models/repositories/UserRepository";

interface IUser {
  id: string;
  email: string;
  password: string;
  first_name: string;
  phone_number: string;
  last_name: string;
  role: string;
  is_active: boolean;
  age: number;
}
const hashedPassword = async (password: string) => {
  return await hash(password, 12);
};

const superAdmin: IUser = {
  id: uuid(),
  email: "fedeco@getMaxListeners.com",
  password: "hashedPassword",
  first_name: "ferdinand",
  last_name: "Ugochukwu",
  phone_number: "0806543712",
  role: "ADMIN",
  age: 41,
  is_active: true,
};

(async () => {
  try {
    const userRepository = new UserRepository();
    const user = await userRepository.findByEmail("fedeco@getMaxListeners.com");
    if (!user) {
      await userRepository.create(user);
      console.log("Super admin created");
    }
    console.log("Super admin already exists");
  } catch (err: any) {
    console.error(
      "Something went wrong when creating the super admin:\n",
      err.stack
    );
  }
})();
