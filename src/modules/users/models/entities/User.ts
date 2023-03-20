import { Exclude, Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  BeforeInsert,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import ProfilesRepository from "../repositories/ProfileRepository";
import Profile from "./Profile";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  age: number;

  @Column({ default: false })
  is_active: boolean;

  @Column({
    type: "enum",
    enum: ["USER", "ADMIN"],
    default: "USER",
  })
  role: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;

  @Expose({ name: "full_name" })
  getFullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  @BeforeInsert()
  async createProfile() {
    if (!this.profile) {
      const profileRepository = new ProfilesRepository();
      this.profile = await profileRepository.create({});
    }
  }
}

export default User;
