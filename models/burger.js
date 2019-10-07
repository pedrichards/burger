// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

//   selectAll()
// ^to get all information to populate html through handlebars
// insertOne()
//insert new burger with property of 'undevoured' into db and thence to html through handlebars
// updateOne()
//^update undevoured burger on-click to send to devoured section of db, and thence to proper html in handlebars


var burger = {
  selectAll: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// var burger = {
//   all: function (cb) {
//     orm.all("burgers", function (res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function (cols, vals, cb) {
//     orm.create("burgers", cols, vals, function (res) {
//       cb(res);
//     });
//   },
//   update: function (objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function (res) {
//       cb(res);
//     });
//   },
//   delete: function (condition, cb) {
//     orm.delete("burgers", condition, function (res) {
//       cb(res);
//     });
//   }
// };


// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
