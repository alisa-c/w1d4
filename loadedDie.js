function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  // for (i of list)


  return function() {
    return list[i++];

    // .shift() removes first item in array, saving it to a variable saves the item
    // var roll = list.shift();
    // return roll;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

// once you hit the end of the array start


// other code that is from mentor
 // var currentNumber = list[i];
 //    i = i + 1;
 //    return currentNumber;