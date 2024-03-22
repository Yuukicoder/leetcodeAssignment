// 206. Reverse linked list
let reverseList = head =>{
    let current = head;
    let prev = null;
    let next = null;
     while(current){
        next = current.next;
        current.next = prev;
        prev = current ;
        current = next;
    }
    // return prev;
    console.log(prev);
}
// console.log(
//     );
//     reverseList([1,2,3,4,5]);
