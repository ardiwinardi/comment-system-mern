import { NotFoundException } from '@src/shared/exceptions/not-found.exception';
import { Model } from 'mongoose';
import { Inject, Service } from 'typedi';
import { CreateCommentDTO } from './dto/create-comment.dto';

import { UpdateCommentDTO } from './dto/update-comment.dto';
import { Comment } from './shemas/comment.schema';

@Service()
export class CommentsService {
  constructor(@Inject('COMMENT') private commentModel: Model<Comment>) {}

  findAll() {
    return this.commentModel.find().exec();
  }

  create(dto: CreateCommentDTO) {
    const createdComment = new this.commentModel({
      comment: dto.comment,
    });
    return createdComment.save();
  }

  async update(id: string, dto: UpdateCommentDTO) {
    const item = await this.commentModel.findByIdAndUpdate(id, {
      comment: dto.comment,
    });
    if (!item) throw new NotFoundException('comment not found');
    return item;
  }

  async remove(id: string) {
    const item = await this.commentModel.findByIdAndDelete(id);
    if (!item) throw new NotFoundException('comment not found');
    return item;
  }
}
