// 206. Reverse linked list
var reverseList = (head) => {
    let current = head;
    let prev = null;
    let next = null;
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
}
console.log(
    reverseList([5,4,3,2,1])
);
