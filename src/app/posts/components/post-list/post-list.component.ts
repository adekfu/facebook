import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {id: 'asfas234234', body: 'AAAA'},
    {id: '3jh4j5g345gh2g3h45g', body: 'BBBB'},
    ];


  constructor() { }

  ngOnInit() {
  }

}
