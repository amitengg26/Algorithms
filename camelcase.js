// JavaScript Algorithm: CamelCase
// find number of words in below string
// one Apple Two Oranges Three Pineapples = 6
let string = "oneAppleTwoOrangesThreePineapples"
let regEx = /[A-Z]/g
// above is regular expression that is used to search through a string
// reg ex starts with forward slash, ends with forward slash
// b/w slashes is pattern 
// and g is for global check
// [A-Z] means check for all words which have Capital A ... Capital Z
// code to get count 
string.split(regEx).length
