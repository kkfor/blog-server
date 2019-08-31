import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Tag } from './tag.interface'
import { TagDto } from './dto/tag.dto'

@Injectable()
export class TagService {
  constructor(
    @InjectModel('Tag') private readonly tagModel: Model<Tag>
  ) {}

  async postOne(tag: TagDto): Promise<Tag> {
    const createdTag = new this.tagModel(tag)
    return await createdTag.save()
  }

  async getOne(id: string): Promise<Tag> {
    return await this.tagModel.findById(id)
  }

  async getList(): Promise<Tag[]> {
    return await this.tagModel.find()
  }

  async putOne(id: string, req): Promise<Tag> {
    return this.tagModel.findByIdAndUpdate(id, req)
  }

  async deleteOne(id: string): Promise<Tag> {
    return this.tagModel.findByIdAndDelete(id)
  }
}
