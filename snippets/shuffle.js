var shuffle = function(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let target = nextInt(i + 1);
    swap(arr, i, target);
  }
};

var swap = function(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
