import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray, IsUrl } from 'class-validator';

@ArgsType()
export class GetLinkArgsDto {
  @Field(() => [String])
  @IsUrl(undefined, { each: true })
  @IsArray()
  urls: string[];
}
