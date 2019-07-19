import { Document } from 'mongoose'

export interface Article extends Document {
  readonly name: string;
  readonly password: string;
  readonly createAt: Date;
}
