function findWaldo(arr, found) {
  arr.forEach(function(person, i){
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);