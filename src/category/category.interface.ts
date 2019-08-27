import { Document } from 'mongoose'

export interface Category extends Document {
  readonly slug: string;
  readonly url: string;
}
