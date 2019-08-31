import { Module } from '@nestjs/common'
import { TagController } from './tag.controller'
import { TagService } from './tag.service'
import { MongooseModule } from '@nestjs/mongoose'
import { TagSchema } from './schemas/tag.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tag', schema: TagSchema }])
  ],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService]
})
export class TagModule {}
