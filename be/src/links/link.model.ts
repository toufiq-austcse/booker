import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Link {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  siteName: string;

  @Field()
  url: string;

  @Field(() => [String])
  images: string[];
}
