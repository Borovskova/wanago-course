import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import CreatePostDto from './dto/create-post-dto';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';

@Controller('posts')
export class PostsController {
    
    constructor(private readonly postsService: PostsService){}

    @Post('create')
  @UseGuards(JwtAuthenticationGuard)
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }
}
