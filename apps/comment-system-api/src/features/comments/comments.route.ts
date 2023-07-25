import { Router } from 'express';
import Container, { Service } from 'typedi';
import { CommentsController } from './comments.controller';
import commentModel from './shemas/comment.schema';

Container.set({ id: 'COMMENT', factory: () => commentModel });

@Service()
export class CommentsRoute {
  public router = Router();

  constructor(private readonly commentsController: CommentsController) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/comments', this.commentsController.index);
    this.router.post('/comments', this.commentsController.create);
    this.router.put('/comments/:id', this.commentsController.update);
    this.router.delete('/comments/:id', this.commentsController.delete);
  }
}
