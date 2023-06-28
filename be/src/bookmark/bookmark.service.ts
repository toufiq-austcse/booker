import { Injectable } from '@nestjs/common';
import { CreateBookmarkInputDto } from './dto/input/create-bookmark-input.dto';
import { BookmarkRepository } from './bookmark.repository';
import { Bookmark } from './models/bookmark.model';
import { BookmarkDocument } from './models/bookmark.schema';
import { GetBookmarkArgDto } from './dto/arg/get-bookmark-arg.dto';
import { UpdateBookmarkInputDto } from './dto/input/update-bookmark-input.dto';

@Injectable()
export class BookmarkService {
  constructor(private bookmarkRepository: BookmarkRepository) {}

  async createBookmark(
    createBookmarkInput: CreateBookmarkInputDto,
    userId: string,
  ) {
    const bookmark = await this.bookmarkRepository.createDocument({
      ...createBookmarkInput,
      user_id: userId,
      links: [],
    });
    return this.toModel(bookmark);
  }

  toModel(bookmarkDocument: BookmarkDocument): Bookmark {
    return {
      ...bookmarkDocument,
      _id: bookmarkDocument._id.toHexString(),
    };
  }

  listBookmarks(userId: string) {
    return this.bookmarkRepository.find({ user_id: userId });
  }

  async getBookmark(getBookmarkArgDto: GetBookmarkArgDto, userId: string) {
    const bookmark = await this.bookmarkRepository.findOne({
      _id: getBookmarkArgDto._id,
      user_id: userId,
    });
    return this.toModel(bookmark);
  }

  async updateBookmark(
    updateBookmarkInput: UpdateBookmarkInputDto,
    userId: string,
  ) {
    const updatedDocument = await this.bookmarkRepository.findOneAndUpdate(
      { _id: updateBookmarkInput._id, user_id: userId },
      updateBookmarkInput,
    );
    return this.toModel(updatedDocument);
  }
}
