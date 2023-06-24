import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { CreateUserInputDto } from './dto/input/create-user-input.dto';
import { UserService } from './user.service';
import { GetUserArgsDto } from './dto/args/get-user-args.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInputDto,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Query(() => User, { name: 'getUser' })
  getUser(@Args() args: GetUserArgsDto): Promise<User> {
    return this.userService.getUser(args);
  }
}
