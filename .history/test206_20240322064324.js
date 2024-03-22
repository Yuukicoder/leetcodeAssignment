// 206. Reverse linked list
let reverseList = head =>{
    let current = head;
    let prev = null;
    let next = null;
    if(current.next == null){
        return head;
    }
    else while(current){
        next = current.next;
        current.next = prev;
        prev = current ;
        current = next;
    }
    return prev;
}
console.log(
    reverseList([5,4,3,2,1])
);
