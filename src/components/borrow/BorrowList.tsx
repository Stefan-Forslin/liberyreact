import {useState} from 'react'
import {Book} from '../../types/Book'
import BookComponent from './BookComponent'
const BorrowList = () => {
	const [borrowed, setBorrowed] = useState<Book[]>([])
    return (
	<section className="border">
	  <h1> My borrowed books</h1>
	   <div className="flex-container">
	   {borrowed.map(book => <BookComponent book={book} />)}
	</div>
</section>
)}
export default BorrowList
