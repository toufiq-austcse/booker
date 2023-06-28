import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Bookmark } from './models/bookmark.model';
import { CreateBookmarkInputDto } from './dto/input/create-bookmark-input.dto';
import { BookmarkService } from './bookmark.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { User } from '../users/models/user.model';
import { GetBookmarkArgDto } from './dto/arg/get-bookmark-arg.dto';
import { UpdateBookmarkInputDto } from './dto/input/update-bookmark-input.dto';

@Resolver(() => Bookmark)
export class BookmarkResolver {
  constructor(private bookmarkService: BookmarkService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark, { name: 'createBookmark' })
  async createBookmark(
    @Args('createBookmarkInput') createBookmarkInput: CreateBookmarkInputDto,
    @CurrentUser() user: User,
  ) {
    return this.bookmarkService.createBookmark(createBookmarkInput, user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Bookmark], { name: 'listBookmarks' })
  async listBookmarks(@CurrentUser() user: User) {
    return this.bookmarkService.listBookmarks(user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Bookmark, { name: 'getBookmark' })
  async getBookmark(
    @Args() getBookmarkArgDto: GetBookmarkArgDto,
    @CurrentUser() user: User,
  ) {
    console.log('getBookmarkArgDto', getBookmarkArgDto);
    return this.bookmarkService.getBookmark(getBookmarkArgDto, user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark, { name: 'updateBookmark' })
  async updateBookmark(
    @Args('updateBookmarkInput') updateBookmarkInput: UpdateBookmarkInputDto,
    @CurrentUser() user: User,
  ) {
    return this.bookmarkService.updateBookmark(updateBookmarkInput, user._id);
  }
}
