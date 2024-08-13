const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = require('./employee');

const uri =  "mongodb://root:MjcxODEtdXNtYW5n@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'})
    .then(() => {
        console.log("Connected to MongoDB");

        // Delete one record from employees
        return Employee.deleteOne({ age: { $lt: 30 }, location: "New York" });
    })
    .then((deleteOneResult) => {
        console.log("Deleted document for deleteOne:", deleteOneResult);

        // Delete many records from employees
        return Employee.deleteMany({ emp_name: { $regex: "R" } });
    })
    .then((deleteManyResult) => {
        console.log("Deleted documents for deleteMany:", deleteManyResult);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });