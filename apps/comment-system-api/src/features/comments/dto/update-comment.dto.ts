import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCommentDTO {
  @IsString()
  @IsNotEmpty()
  comment: string;

  constructor(body: UpdateCommentDTO) {
    this.comment = body.comment;
  }
}
