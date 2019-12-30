import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  BaseEntity
} from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => ID, { name: 'id' })
  @Column()
  @Generated('uuid')
  uuid!: string

  @Field()
  @Column()
  firstName!: string

  @Field()
  @Column()
  lastName!: string

  @Field()
  @Column({ unique: true })
  email!: string
}
