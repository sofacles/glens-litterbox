import { LinkNodeInterface } from "./LinkNodeInterface";

export default function(node: LinkNodeInterface) {
  console.log("Here is your list");
  let linkNode: LinkNodeInterface | undefined = node;
  console.log(linkNode.cargo);
  while (linkNode.next !== undefined) {
    linkNode = linkNode.next;
    console.log(linkNode.cargo);
  }
}
