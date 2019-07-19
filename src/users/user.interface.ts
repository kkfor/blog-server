import { Document, Types } from 'mongoose'

export interface User extends Document {
  _id: Types.ObjectId;
  readonly name: string;
  readonly password: string;
  readonly createAt: Date;
}
