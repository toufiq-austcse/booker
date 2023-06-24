import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserInputDto } from './dto/input/create-user-input.dto';
import { GetUserArgsDto } from './dto/args/get-user-args.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { UserDocument } from './models/user.schema';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserInput: CreateUserInputDto) {
    const currentUser = await this.userRepository.findOne({
      email: createUserInput.email,
    });
    if (currentUser) {
      throw new UnprocessableEntityException('Email already exists.');
    }

    const user = await this.userRepository.createDocument({
      ...createUserInput,
      password: await bcrypt.hash(createUserInput.password, 10),
    });
    return this.toModel(user);
  }

  async getUser(args: GetUserArgsDto) {
    const user = await this.userRepository.findOne(args);
    return this.toModel(user);
  }

  private toModel(userDocument: UserDocument): User {
    return {
      _id: userDocument._id.toHexString(),
      email: userDocument.email,
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const userDocument = await this.userRepository.findOne({ email });
    const passwordIsValid = await bcrypt.compare(
      password,
      userDocument.password,
    );
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    return this.toModel(userDocument);
  }
}
