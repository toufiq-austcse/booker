import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../users/models/user.model';
import { GqlExecutionContext } from '@nestjs/graphql';

export const getCurrentUserByContext = (context: ExecutionContext): User => {
  if (context.getType() === 'http') {
    const request = context.switchToHttp().getRequest();
    return request.user;
  }
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user;
};

export const CurrentUser = createParamDecorator((data, context) => {
  return getCurrentUserByContext(context);
});
