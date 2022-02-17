//JavaScript Algorithm: Pangrams
// Pangrams is a sentence which has all the alphabets 
// The quick brown fox jumps over the lazy dog
let s = "Th quick brown fo jumps ovr th lazy dog";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let regex = /\s/g;
let lowercase = s.toLowerCase().replace(regex,"");
for(let i = 0; i<alphabet.length;i++){	 
	if(lowercase.indexOf(alphabet[i]) == -1){
  	console.log('Not Pangram')    
  }
}

