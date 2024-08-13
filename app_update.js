const mongoose = require('mongoose');

const Employee = require('./employee');

const uri =  "mongodb://root:MjcxODEtdXNtYW5n@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'})
    .then(() => {
        console.log("Connected to MongoDB");

        // Update one record in employee
        return Employee.updateOne({ emp_name: "John Doe" },
            { email: "jdoe@somewhere.com" });
    })
    .then((updateOneResult) => {
        console.log("Updated Docs for updateOne:", updateOneResult);
        console.log("One record updated");

        // Update many records in employees
        return Employee.updateMany({ age: { $gt: 30 } },
            { location: "New York" });
    })
    .then((updateManyResult) => {
        console.log("Updated Docs for updateMany:", updateManyResult);
        console.log("Many records updated");

    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });
