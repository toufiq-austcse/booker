import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '../common/database/abstract.repository';
import { UserDocument } from './models/user.schema';
import { Model } from 'mongoose';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository extends AbstractRepository<UserDocument> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
