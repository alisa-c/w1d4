var countdownGenerator = function (x) {
  var i = x
  return function() {
    if (i >= 1) {
      console.log("T-minus " + i + "...");
      i--;
    } else if (i === 0) {
      console.log("Blast off!");
      i--;
    } else {
      console.log("Rockets already gone, bub!");
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!



// code before to complete the assignments requirements
// new code see above.... simliflies and shortens the statements
// if (i === 3) {
//       console.log("T-minus " + i + "...");
//       i--;
//     } else if (i === 2) {
//       console.log("T-minus " + i + "...");
//       i--;
//     } else if (i === 1) {
//       console.log("T-minus " + i + "...");