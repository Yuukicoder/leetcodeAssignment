function StrangeGridValue(r,c){
    let x;
    //  x=x+1;
    if(c%2!=0){
        console.log(((r-1)/2) *10+(c-1)*2);

    }
    else console.log((r/2-1) *10+(c-1)*2);
}
StrangeGridValue(2,3);
