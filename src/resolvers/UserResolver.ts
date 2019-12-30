import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { User } from '../entity/User'

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('email') email: string,
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string
  ) {
    const user = new User()
    user.email = email
    user.firstName = firstName
    user.lastName = lastName
    await user.save()
    return user
  }

  @Query(() => [User])
  async users() {
    return await User.find()
  }
}
