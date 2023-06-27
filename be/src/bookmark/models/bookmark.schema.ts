import { AbstractDocument } from '../../common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class BookmarkDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  user_id: string;

  @Prop()
  links: string[];
}

export const BookmarkSchema = SchemaFactory.createForClass(BookmarkDocument);
