import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPostList} from '../../shared/interfaces/post-list.interface';
import {sortBy, sortByOperator} from '../../shared/helpers/sorter.helper';
import {environment} from '../../../environments/environment';
import {IPost} from '../../shared/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  async getPosts(): Promise<IPostList> {
    const url = environment.postsUrl;
    const response: IPostList = await this.http.get<IPostList>(url).pipe(sortByOperator<IPostList>('createdTime')).toPromise();
    sortBy<IPost>(response, (post: IPost) => new Date(post.createdTime));
    return response;
  }

  async getPostById(postId: string): Promise<IPost> {
    const posts = await this.getPosts();
    return posts.find((post) => post.id === postId);
  }

}
