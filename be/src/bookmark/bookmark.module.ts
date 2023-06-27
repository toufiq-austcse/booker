import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkResolver } from './bookmark.resolver';
import { BookmarkRepository } from './bookmark.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Bookmark } from './models/bookmark.model';
import { BookmarkSchema } from './models/bookmark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bookmark.name,
        schema: BookmarkSchema,
      },
    ]),
  ],
  providers: [BookmarkService, BookmarkRepository, BookmarkResolver],
})
export class BookmarkModule {}
