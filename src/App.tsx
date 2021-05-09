import React, {useState} from 'react';
// React from 'react';
import './App.css';
import {Book} from './types/Book'
import Catalouge from './components/catalogue/Catalogue'
import BorrowList from './components/borrow/BorrowList'
function App() {
  const [borrowed, setBorrowed] = useState<Book[]>([])
  const handleBookBorrowed = (book: Book) =>{
	    let newList = [...borrowed, book]
		setBorrowed(newList)
  }
  return (
	  <main>
	       <Catalouge handleBookBorrowed={handleBookBorrowed}/>
		   <BorrowList borrowed={borrowed}/>
		</main>
  );
}
export default App;
