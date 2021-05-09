import {Book} from '../../types/Book'
interface BookComponentProps{
	book: Book,
	borrowBook: (borrowedBook: Book) => void
}
const BookComponent = ({book, borrowBook}: BookComponentProps) =>(
	<div className="book-card">
	  <h2>{book.title}</h2>
	  <p>{book.author}</p>
	 <button onClick={() =>borrowBook(book)}>borrow me!</button>
	 </div>
)
export default BookComponent
