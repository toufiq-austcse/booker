import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
