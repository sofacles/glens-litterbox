import React from 'react';
import { MultiplyPolynomials } from "./multiplyPolynomials";
import  LinkedListOfPolynomials, {printLinkedList}  from "./LinkedListOfPolynomials";
import './App.css';

const App: React.FC = () => {
  const left = new LinkedListOfPolynomials([{pow: 0, coef: 4}]);
  const right = new LinkedListOfPolynomials([{pow: 1, coef: 1}, {pow: 0, coef: 5}]);
 
  let result = MultiplyPolynomials(left, right);
  let printed = printLinkedList(result)
  return (
    <div className="App">
     {printed}
    </div>
  );
}

export default App;
