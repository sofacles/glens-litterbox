import {LinkNodeInterface} from "./LinkNodeInterface";


class SinglyLinkedNode implements LinkNodeInterface {
    public cargo: string = "";
    public next?: SinglyLinkedNode;

    constructor(c: string, n? : LinkNodeInterface) {
        this.cargo = c;
        this.next = n;
    }
}

class SingleLinkedList {
    private head: SinglyLinkedNode;
    constructor( head: SinglyLinkedNode) {
        this.head = head;
    }

    public printNodes(): void {
        let linkNode: LinkNodeInterface | undefined = this.head;
        console.log(linkNode.cargo);
        while (linkNode.next !== undefined) {
          linkNode = linkNode.next;
          console.log(linkNode.cargo);
        }
    }
}

export {SinglyLinkedNode, SingleLinkedList};