import { IBookViewModel } from './IBookViewModel';
import { IAuthorViewModel } from './IAuthorViewModel';

export interface IBookAuthorViewModel {
    book: IBookViewModel;
    authors: IAuthorViewModel[];
}