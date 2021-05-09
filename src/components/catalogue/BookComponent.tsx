import {Book} from '../../types/Book'
interface BookComponentProps{
	book: Book
}
const BookComponent = ({book: {title, author}}: BookComponentProps) =>(
	<div className="book-card">
	  <h2>{title}</h2>
	  <p>{author}</p>
	 <button>borrow me!</button>
	 </div>
)
export default BookComponent
