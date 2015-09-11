(function() {
  var a, add, b, func, plus;

  func = function() {
    return "bar";
  };

  a = 333;

  b = 444;

  add = function(a, b) {
    return a + b;
  };

  plus = function(a, b) {
    return a - b;
  };

}).call(this);
