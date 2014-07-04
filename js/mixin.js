var mixin = (function() {
  var mixin = function(destination, source) {
    for (var key in source) {
      if (source.hasOwnProperty(key))
        destination[key] = source[key];
    }
    return destination;
  };

  return mixin;
})();
