import React from 'react';
import './App.css';
import SinglyLinkedNode from "./LinkedList/SingleLinkedList";
import testDriver from "./LinkedList/driver";

let head: SinglyLinkedNode = { cargo: "head"};
head.next = new SinglyLinkedNode("first");
let itor8or = head.next;
itor8or.next = new SinglyLinkedNode("second");
itor8or = itor8or.next;
itor8or.next = new SinglyLinkedNode("third", new SinglyLinkedNode("fourth"));
testDriver(head);


const App: React.FC = () => {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
