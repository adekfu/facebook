import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IPostList} from '../../../shared/interfaces/post-list.interface';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: IPostList = null;
  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() {
  }

  ngOnInit() {
  }

  addPost(post) {
    this.posts.unshift(post);
  }

  private removePost() {
    const post = this.dialog.__postToRemove;
    this.posts.splice(this.posts.indexOf(post), 1);

  }

  removePostWithConfirmation(post: IPost) {
    console.log('rmv confirm');
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }

  removePostAndDialogHide() {
    this.removePost();
    this.dialog.hide();
  }
}
