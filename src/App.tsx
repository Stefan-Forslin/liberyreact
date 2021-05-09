import React from 'react';
import './App.css';

function App() {
  return (
	  <main>
	  <div className="border">
		 <h1>Catalouge</h1>
			 <div className="flex-container">
			    <div className="book-card">
			      <h2>titel</h2>
			      <p>författare</p>
			     <button>borrow me!</button>
				 </div>
			  </div>
			 </div>
			  <div className="border">
			    <h1> My borrowed books</h1>
			     <div className="flex-container">
			      <div className="book-card">
			      <h2>titel</h2>
			      <p>författare</p>
			     <button>Return</button>
			    </div>
	         </div>
	    </div>
		</main>
  );
}

export default App;
