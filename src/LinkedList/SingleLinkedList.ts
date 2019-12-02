import {LinkNodeInterface} from "./LinkNodeInterface";


class SinglyLinkedNode<t> implements LinkNodeInterface<t> {
    public cargo: t;
    public next?: SinglyLinkedNode<t>;

    constructor(c: t, n? : LinkNodeInterface<t>) {
        this.cargo = c;
        this.next = n;
    }
}

class SingleLinkedList<t> {
    private head: SinglyLinkedNode<t>;
    constructor( head: SinglyLinkedNode<t>) {
        this.head = head;
    }

    public printNodes(): void {
        let linkNode: LinkNodeInterface<t> | undefined = this.head;
        console.log(linkNode.cargo);
        while (linkNode.next !== undefined) {
          linkNode = linkNode.next;
          console.log(linkNode.cargo);
        }
    }
}

export {SinglyLinkedNode, SingleLinkedList};