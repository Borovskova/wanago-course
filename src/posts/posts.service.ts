import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';

import Post from './post.entity';
import CreatePostDto from './dto/create-post-dto';
import User from 'src/users/user.entity';
import { GET_POSTS_CACHE_KEY } from './postsCacheKey.constant';
import { PostsSearchService } from './posts-search.service';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
        private postsSearchService:PostsSearchService,
        // @Inject(CACHE_MANAGER) private cacheManager: Cache,
        ){}

        async createPost(post: CreatePostDto, user?: User) {
            const newPost = await this.postsRepository.create({
              ...post
            });
            await this.postsRepository.save(newPost);
            this.postsSearchService.indexPost(newPost);
            await this.clearCache();
            return newPost;
          }

          async clearCache() {
            // const keys: string[] = await this.cacheManager.store.keys();
            // keys.forEach(key => {
            //   if (key.startsWith(GET_POSTS_CACHE_KEY)) {
            //     this.cacheManager.del(key);
            //   }
            // });
          }
        
}
