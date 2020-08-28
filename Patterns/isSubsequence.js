function isSubsequence(str1, str2){
    let i = 0, j = 0;
    let arr = []
    while(i < str1.length){
        if(str1.charAt(i) === str2.charAt(j)){
            arr.push(str2.charAt(j));
            i++;
        }else{
            j++
        }
        if(j > str2.length) break;
    }
    let str = arr.join('');
    if(str === str1) return true;
    else return false;
}
let str1 = "abc";
let str2 = "acb";
console.log(isSubsequence(str1, str2));