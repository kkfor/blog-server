import { Document } from 'mongoose'

export interface Tag extends Document {
  readonly slug: string;
  readonly url: string;
}
