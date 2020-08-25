function sF(num1, num2) {
    sNum1=num1.toString();
    sNum2=num2.toString();
    if(sNum1.length != sNum2.length) return false;
    const ob = {};
    for(let i = 0; i<sNum1.length; i++){
        let char = sNum1[i];
        ob[char] ? ob[char] += 1 : ob[char] = 1;
    }
    for(let i = 0; i<sNum2.length; i++){
        let char = sNum2[i];
        if(!ob[char]) return false;
        else ob[char] -= 1;
    }
    return true;
}
let num1 = 12893;
let num2 = 18932;
console.log(sF(num1, num2));