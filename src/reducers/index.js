import { combineReducers } from 'redux';
import Books from './bookstore';
import SelectedBook from './selection';

const rootReducer = combineReducers({
  books: Books,
  selectedBook: SelectedBook
});

export default rootReducer;
