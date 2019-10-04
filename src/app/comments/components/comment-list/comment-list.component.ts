import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';
import {IComment} from '../../../shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;
  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment() {
    const comment = this.dialog.__commentToRemove;
    this.comments.splice(this.comments.indexOf(comment), 1);
  }

  removeCommentWithConfirmation(comment: IComment) {
    this.dialog.show();
    this.dialog.__commentToRemove = comment;
  }

  removeCommentAndDialogHide() {
    this.removeComment();
    this.dialog.hide();
  }
}
