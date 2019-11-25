import { Document } from "mongoose"

export interface Menu extends Document {
  readonly slug: string
  readonly url: string
}
