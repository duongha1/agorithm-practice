function reverse(str){
    if(str.length == 0) return "";
    return str.charAt(str.length-1) + reverse(str.substring(0, str.length - 1));
}
console.log(reverse("dlrow olleh"));