import { Injectable } from '@nestjs/common';
import Post from './post.entity';

@Injectable()
export class PostsSearchService {

    async indexPost(post: Post) {
        // return this.elasticsearchService.index<PostSearchResult, PostSearchBody>({
        //   index: this.index,
        //   body: {
        //     id: post.id,
        //     title: post.title,
        //     paragraphs: post.paragraphs,
        //     authorId: post.author.id,
        //   },
        // });
      }
}
