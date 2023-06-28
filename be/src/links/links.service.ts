import { Injectable } from '@nestjs/common';
import { GetLinkArgsDto } from './dto/args/get-link-args.dto';
import { getLinkPreview } from 'link-preview-js';

@Injectable()
export class LinksService {
  getLinks(args: GetLinkArgsDto) {
    return Promise.all(args.urls.map((url) => getLinkPreview(url)));
  }
}
