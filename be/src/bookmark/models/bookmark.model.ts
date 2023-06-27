import { AbstractModel } from '../../common/database/abstract.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bookmark extends AbstractModel {
  @Field()
  name: string;

  @Field()
  user_id: string;

  @Field(() => [String])
  links: string[];
}
