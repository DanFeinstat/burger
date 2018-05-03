//import connections.js
const connection = require("./connection.js");

//orm methods: selectAll(), insertOne(), updateOne()
//create orm object
const orm = {
  selectAll: function(tableName, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function(tableName, burgerName, cb) {
    let queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
    connection.query(queryString, [tableName, burgerName], function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function(tableName, colToUpdate, updateVal, id, cb) {
    let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(
      queryString,
      [tableName, colToUpdate, updateVal, id],
      function(err, res) {
        if (err) throw err;
        cb(res);
      }
    );
  },
};

module.exports = orm;
