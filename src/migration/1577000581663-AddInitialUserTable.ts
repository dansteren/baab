import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddInitialUserTable1577000581663 implements MigrationInterface {
  name = 'AddInitialUserTable1577000581663'

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" SERIAL NOT NULL,
        "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "firstName" character varying NOT NULL,
        "lastName" character varying NOT NULL,
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
      )`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "user"`, undefined)
  }
}
