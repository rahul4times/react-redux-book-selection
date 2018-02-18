export const SELECTED_BOOK = 'SELECTED_BOOK';

export const selectBook = (book) => {
  return{
    type: SELECTED_BOOK,
    payload: book
  }
}
