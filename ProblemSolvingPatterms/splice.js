function validAnagram(str1, str2){
	if(str1.length != str2.length) return false;
	let arr1 = str1.split('');
	let arr2 = str2.split('');
	for (var i = 0; i < arr1.length; i++) 
	{
		 //return the position of value in arr2 that equal to the position i of value in arr1
		 //if there is no value equal then return -1
		let counter = arr2.indexOf(arr1[i]);
		console.log(counter);
		
		//not equal return false
		if(counter === -1){
			return false;
		}

		//take away the position counter in arr2 to continue the loop
		arr2.splice(counter, 1);
	}
	return true;
}

var str1= "anagram";
var str2= "naagrma";
console.log(validAnagram(str1, str2));