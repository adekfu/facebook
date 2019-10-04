import {Component, Input, OnInit} from '@angular/core';
import {IPostList} from '../../../shared/interfaces/post-list.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: IPostList = null;

  constructor() {
  }

  ngOnInit() {
  }

  addPost(post) {
    this.posts.unshift(post);
  }

  deletePost(post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }
}
