import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import User from "./User";

@Entity("profiles")
class Profile {
  @PrimaryColumn()
  readonly id: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @Column({
    nullable: true,
    default:
      "https://minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg",
  })
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Profile;
