import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import uuidv4 from 'uuid/v4';
import {IComment} from '../../../shared/interfaces/comment.interface';
import faker from 'faker';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  comment = {
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null
    },
    body: null
  } as IComment;

  @Output() addComment = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.comment.id = uuidv4();
    this.comment.createdTime = new Date().toString();
    this.comment.author.id = this.comment.id;
    this.comment.author.avatarUrl = 'http://placeskull.com/50/50/000000';
    this.comment.author.name = faker.name.findName();
    console.log('submit', this.comment.id);
    const comment = Object.assign({}, this.comment);
    this.addComment.emit(comment);
  }

}
