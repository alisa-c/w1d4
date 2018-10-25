//create a map function
// map is a call back since it is being referenced in the code with (function)

var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {
  var result = [];
  // for in is for objects.... for of is for array :)
  for (word of arr) {
      result.push(callback(word));
  }
  console.log(result);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]