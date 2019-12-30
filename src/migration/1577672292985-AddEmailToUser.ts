import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEmailToUser1577672292985 implements MigrationInterface {
  name = 'AddEmailToUser1577672292985'

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "email" character varying NOT NULL DEFAULT 'unknown@unverified.com'`,
      undefined
    )
    await queryRunner.query(
      `UPDATE "user" SET "email" = "uuid" || '@unverified.com'`,
      undefined
    )
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`,
      undefined
    )
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`, undefined)
  }
}
