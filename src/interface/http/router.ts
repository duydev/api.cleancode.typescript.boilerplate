import { IRouter } from 'src/interfaces';
import { Identifier } from 'src/constants';
import { fluentProvide } from 'src/container';
import { Router } from 'express';

@fluentProvide(Identifier.MainRouter)
  .inSingletonScope()
  .done()
export class MainRouter implements IRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    const apiRouter = Router();

    this.router.use(apiRouter);
  }

  route(): Router {
    return this.router;
  }
}
