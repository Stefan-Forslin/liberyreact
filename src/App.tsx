import React from 'react';
import './App.css';
import Catalouge from './components/catalogue/Catalogue'
import BorrowList from './components/borrow/BorrowList'
function App() {
  return (
	  <main>
	       <Catalouge />
		   <BorrowList />
		</main>
  );
}
export default App;
