//require orm object from config
const orm = require("../config/orm.js");

//call orm functions
var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(burgerName, cb) {
    orm.insertOne("burgers", burgerName, function(res) {
      cb(res);
    });
  },
  update: function(updateVal, id, cb) {
    orm.updateOne("burgers", "devoured", updateVal, id, function(res) {
      cb(res);
    });
  },
};

//export
module.exports = burgers;
