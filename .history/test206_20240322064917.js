// 206. Reverse linked list
let reverseList = head =>{
    let current = head;
    let prev = null;
    let next = null;
    if(head == null || head.next == null){
        return head;
    }
     while(current!=null){
        next = current.next;
        current.next = prev;
        prev = current ;
        current = next;
    }
    return prev;
}
console.error(reverseList([1,2,3,4,5]));
