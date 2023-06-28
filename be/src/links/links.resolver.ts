import { Args, Query, Resolver } from '@nestjs/graphql';
import { Link } from './link.model';
import { LinksService } from './links.service';
import { GetLinkArgsDto } from './dto/args/get-link-args.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver(() => Link)
export class LinksResolver {
  constructor(private linkService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Link], { name: 'getLinks' })
  async getLinks(@Args() args: GetLinkArgsDto) {
    return this.linkService.getLinks(args);
  }
}
