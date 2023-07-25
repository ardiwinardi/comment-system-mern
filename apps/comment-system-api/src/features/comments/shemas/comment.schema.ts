import { User } from '@api/src/shared/interfaces/user';
import mongoose from 'mongoose';
import { userSchema } from './user.schema';
const { Schema } = mongoose;

export interface Comment {
  user: User;
  comment: string;
  like: string[];
  dislike: string[];
}

export const commentSchema = new Schema<Comment>({
  user: userSchema,
  comment: String,
  like: [String],
  dislike: [String],
});

const commentModel = mongoose.model<Comment & Document>(
  'comments',
  commentSchema
);
export default commentModel;
