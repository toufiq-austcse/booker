import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../../common/database/abstract.model';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;
}
