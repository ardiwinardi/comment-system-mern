import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDTO {
  @IsString()
  @IsNotEmpty()
  comment: string;

  constructor(payload: CreateCommentDTO) {
    this.comment = payload.comment;
  }
}
