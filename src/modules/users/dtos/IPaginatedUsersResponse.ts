import User from "../models/entities/User";

export default interface IPaginatedUsersResponse {
  total_records: number;
  total_pages: number;
  users: User[];
}
