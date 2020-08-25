function areThereDuplicates(...args){
    let arr = [];
    for(let i = 0; i < args.length; i++){
        arr.push(args[i]);
    }
    let ob = {};
    for(let val of arr){
        ob[val] = (ob[val] || 0) + 1;
    }
    for(let key in ob){
        if(ob[key] == 2) return true;
    }
    return false;
}
let arr = [1,2,3,4,5,6,7];
console.log( areThereDuplicates(1,2,3,2,3,4,5,6));