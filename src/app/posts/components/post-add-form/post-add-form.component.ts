import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IPost} from '../../../shared/interfaces/post.interface';
import uuidv4 from 'uuid/v4';
import faker from 'faker';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  addPostForm = new FormGroup({
    body: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  @Output() addPost = new EventEmitter();

  postToSent = {
    id: null,
    createdTime: null,
    author: {id: null, name: null, avatarUrl: null},
    body: null,
    images: null,
    comments: null,
  } as IPost;

  constructor() {
  }

  get body() {
    return this.addPostForm.get('body');
  }

  ngOnInit() {
  }

  onSubmit() {
    const post = this.addPostForm.getRawValue();
    this.postToSent.id = uuidv4();
    this.postToSent.images = ['http://placeskull.com/50/50/000000'];
    /* this.postToSent.images = [faker.image.food()];*/
    this.postToSent.createdTime = new Date().toString();
    this.postToSent.body = post.body;
    this.postToSent.author.id = uuidv4();
    this.postToSent.author.name = faker.name.findName();
    this.postToSent.author.avatarUrl = 'http://placeskull.com/50/50/000000';

    this.addPost.emit(Object.assign({}, this.postToSent));
    this.addPostForm.reset();
  }

}
