export default interface ICreateUserDTO {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: string;
  is_active?: boolean;
}
