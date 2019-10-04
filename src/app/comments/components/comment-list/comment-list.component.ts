import {Component, OnInit} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments = [
    {id: '1', body: 'Komentarz z onet.pl'},
    {id: '2', body: 'Komentarz z wykop.pl'}
  ] as ICommentList;

  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    console.log(`app comment fx(${comment.body})`, comment);
    this.comments.push(comment);
  }
}
