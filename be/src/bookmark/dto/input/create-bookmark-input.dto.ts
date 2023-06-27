import { IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookmarkInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;
}
