import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '../common/database/abstract.repository';
import { BookmarkDocument } from './models/bookmark.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmark } from './models/bookmark.model';

@Injectable()
export class BookmarkRepository extends AbstractRepository<BookmarkDocument> {
  constructor(@InjectModel(Bookmark.name) bookmark: Model<BookmarkDocument>) {
    super(bookmark);
  }
}