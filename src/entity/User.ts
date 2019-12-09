import { Entity, PrimaryGeneratedColumn, Generated, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  uuid!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
}
