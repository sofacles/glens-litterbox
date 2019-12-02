import React from 'react';
import './App.css';
import {SinglyLinkedNode, SingleLinkedList } from "./LinkedList/SingleLinkedList";

// let head: SinglyLinkedNode<string> = { cargo: "head"};
// head.next = new SinglyLinkedNode("first");
// let itor8or = head.next;
// itor8or.next = new SinglyLinkedNode("second");
// itor8or = itor8or.next;
// itor8or.next = new SinglyLinkedNode("third", new SinglyLinkedNode("fourth"));

// let myList = new SingleLinkedList(head);
// myList.printNodes();

let head: SinglyLinkedNode<number> = { cargo: 0};
head.next = new SinglyLinkedNode(11);
let itor8or = head.next;
itor8or.next = new SinglyLinkedNode(12);
itor8or = itor8or.next;
itor8or.next = new SinglyLinkedNode(13, new SinglyLinkedNode(14));

let myList = new SingleLinkedList(head);
myList.printNodes();


const App: React.FC = () => {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
