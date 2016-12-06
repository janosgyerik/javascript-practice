var recyclingRandomRange = function(start, end) {
  var range = [];
  var resetRange = function() {
    for (let i = start; i < end; i++) {
      range.push(i);
    }
    shuffle(range);
  };

  return function(n) {
    if (range.length === 0) {
      resetRange();
    }
    return range.splice(0, n);
  };
};
