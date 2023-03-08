import ICreateProfileDTO from "../../../../modules/users/dtos/ICreateProfileDTO";
import { Repository } from "typeorm";
import dataSource from "../../../../config/databases/postgresql";

import Profile from "../entities/Profile";

class ProfilesRepository {
  private ormRepository: Repository<Profile>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Profile);
  }

  public async create(profileData: ICreateProfileDTO): Promise<Profile> {
    const profile = this.ormRepository.create(profileData);

    await this.ormRepository.save(profile);

    return profile;
  }

  public async save(profile: Profile): Promise<Profile> {
    return this.ormRepository.save(profile);
  }
}

export default ProfilesRepository;
