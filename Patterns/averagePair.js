function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    console.log(args.sort((a,b) => a > b));
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
console.log(areThereDuplicates(1,2,31,4,52,27,8,9));