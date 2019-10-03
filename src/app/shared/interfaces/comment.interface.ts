import {IAuthor} from './author.interface';

export interface IComment {
  id: string;
  createdTime;
  author: IAuthor;
  body: string;
}
