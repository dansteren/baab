import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  BaseEntity
} from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  @Generated('uuid')
  uuid!: string

  @Field()
  @Column()
  firstName!: string

  @Field()
  @Column()
  lastName!: string
}
