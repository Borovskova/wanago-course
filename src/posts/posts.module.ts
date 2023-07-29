import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsSearchService } from './posts-search.service';
import Post from './post.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Post])
  ],
  providers: [PostsService, PostsSearchService],
  controllers: [PostsController]
})
export class PostsModule {}
