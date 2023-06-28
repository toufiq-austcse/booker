import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Link {
  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  siteName: string;

  @Field()
  url: string;

  @Field(() => [String], { defaultValue: [] })
  images: string[];
}
