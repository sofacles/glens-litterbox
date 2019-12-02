import {LinkNodeInterface} from "./LinkNodeInterface";


class SinglyLinkedNode implements LinkNodeInterface {
    public cargo: string = "";
    public next?: SinglyLinkedNode;

    constructor(c: string, n? : LinkNodeInterface) {
        this.cargo = c;
        this.next = n;
    }
}

export default SinglyLinkedNode;