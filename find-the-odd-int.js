// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  //grab one item from array
  for (var i = 0; i < A.length; i++) {
    var number = A[i];
    var total = 0;

    //loop through array and find matching items
    for (var j = 0; j < A.length; j++) {
      if (A[j] == number) {
        total++;
      }
    }

    //test to see if item appears an odd number of times
    if (total % 2 != 0) {
      return number;
    }
  }
}
