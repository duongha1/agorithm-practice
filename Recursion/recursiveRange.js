function recursiveRange(num){
    if(num==0) return 0;
    console.log(num);
    return num+recursiveRange(num-1);
}
console.log(recursiveRange(6));