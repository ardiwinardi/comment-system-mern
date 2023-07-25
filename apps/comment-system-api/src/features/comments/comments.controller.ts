import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';

import { validateId, validatePayload } from '@src/shared/commons/validate';
import { CommentsService } from './comments.service';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { UpdateCommentDTO } from './dto/update-comment.dto';

@Service()
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items = await this.commentService.findAll();
      res.status(200).json({ data: items, message: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = new CreateCommentDTO({
        comment: req.body.comment,
      });
      await validatePayload(payload);

      const data = await this.commentService.create(payload);
      res.status(201).json({ data, message: 'comment created successfully' });
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const payload = new UpdateCommentDTO({
        comment: req.body.commet,
      });
      validateId(id);
      await validatePayload(payload);

      const data = await this.commentService.update(id, payload);
      res.status(201).json({ data, message: 'comment updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      validateId(id);

      const data = await this.commentService.remove(id);
      res.status(200).json({ data, message: 'comment deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
