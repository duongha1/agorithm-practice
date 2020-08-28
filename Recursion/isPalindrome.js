function reverse(str){
    if(str.length == 0) return "";
    return str.charAt(str.length-1) + reverse(str.substring(0, str.length - 1));
}
function isPalindrome(str){
    let str1 = str;
    let str2 = reverse(str);
    console.log(str1, str2);
    if(str1 === str2) return true;
    else return false;
}
console.log(isPalindrome("amanaplanacanalpandemonium"));