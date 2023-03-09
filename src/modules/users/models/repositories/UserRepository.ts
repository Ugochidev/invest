import { Repository } from "typeorm";
import User from "../entities/User";
import dataSource from "../../../../config/databases/postgresql";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
// import IListUsersDTO from "../../dtos/IListUsersDTO";
// import IPaginatedUsersResponse from "@modules/users/dtos/IPaginatedUsersResponse";

class UserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = dataSource.getRepository(User);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user || undefined;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id },
    });

    return user || undefined;
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  // async findAll({
  //   page,
  //   limit,
  //   is_active,
  // }: IListUsersDTO): Promise<IPaginatedUsersResponse> {
  //   const [users, totalRecords] = await this.ormRepository.findAndCount({
  //     where: {
  //       is_active,
  //     },
  //     select: [
  //       "id",
  //       "first_name",
  //       "last_name",
  //       "email",
  //       "is_active",
  //       "role",
  //       "created_at",
  //       "updated_at",
  //     ],
  //     relations: ["profile"],
  //     order: {
  //       created_at: "DESC",
  //     },
  //     skip: (page - 1) * limit,
  //     take: limit,
  //   });

  //   const totalPages = Math.ceil(totalRecords / limit);

  //   return {
  //     total_records: totalRecords,
  //     total_pages: totalPages,
  //     users,
  //   };
  // }

  async findOne(data: object): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: data,
      select: [
        "id",
        "first_name",
        "last_name",
        "email",
        "is_active",
        "role",
        "created_at",
        "updated_at",
      ],
      relations: ["profile"],
    });

    return user || undefined;
  }

  async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UserRepository;
