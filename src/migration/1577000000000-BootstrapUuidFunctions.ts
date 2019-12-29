import { MigrationInterface, QueryRunner } from 'typeorm'

export class BootstrapUuidFunctions1577000000000 implements MigrationInterface {
  name = 'BootstrapUuidFunctions1577000000000'

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `DROP EXTENSION IF NOT EXISTS "uuid-ossp"`,
      undefined
    )
  }
}
