import {Component, OnInit} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments = [
    {id: '1', body: 'BBB'},
    {id: '2', body: 'DDD'}
  ] as ICommentList;

  constructor() {
  }

  ngOnInit() {
  }

}
