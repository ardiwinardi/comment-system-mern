import { User } from '@api/src/shared/interfaces/user';
import mongoose, { Document, Schema } from 'mongoose';

export const userSchema = new Schema<User>({
  name: String,
  email: String,
  avatar: String,
});

const userModel = mongoose.model<User & Document>('users', userSchema);
export default userModel;
