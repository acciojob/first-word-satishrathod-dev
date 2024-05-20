function firstWord(s) {
  // your code here
	if(str.trim() === ""){
		return str;
	}
	
	const firstSpaceIndex = str.indexOf(" ");

	if(firstSpaceIndex === -1){
		return str;
	}
	else{
		return str.splice(0, firstSpaceIndex);
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
