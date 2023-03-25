// import { MigrationInterface, QueryRunner } from "typeorm"

// export class PostRefactoring1679402196602 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(
//           `CREATE TYPE "public"."users_role_enum" AS ENUM('USER', 'ADMIN')`
//         );
//         await queryRunner.query(
//           `CREATE TABLE "users" ("id" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "phone_number" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'USER', "age" number varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "profileId" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_b1bda35cdb9a2c1b777f5541d8" UNIQUE ("profileId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
//         );
//         await queryRunner.query(
//           `CREATE TABLE "profiles" ("id" character varying NOT NULL, "avatar" character varying DEFAULT 'https://minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg',"created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`
//         );
//         await queryRunner.query(
//           `ALTER TABLE "users" ADD CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
//         );
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//           await queryRunner.query(
//       `ALTER TABLE "users" DROP CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87"`
//     );
//     await queryRunner.query(`DROP TABLE "profiles"`);
//     await queryRunner.query(`DROP TABLE "users"`);
//     await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
//   }
//     }

