var nextInt = function(bound) {
  if (bound === undefined) {
    bound = Number.MAX_SAFE_INTEGER;
  }
  return Math.floor(bound * Math.random());
};
