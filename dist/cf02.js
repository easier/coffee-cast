(function() {
  var exports;

  exports = this;

  exports.page = {
    add: function() {
      return console.log(111);
    },
    plus: function() {}
  };

  exports.about = {
    plus: function() {
      return console.log(222);
    }
  };

}).call(this);
