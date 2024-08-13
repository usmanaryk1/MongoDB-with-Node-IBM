const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:MjcxODEtdXNtYW5n@localhost:27017";


mongoose.connect(uri,{'dbName':'employeeDB'})
    .then(() => {
        console.log("Connected to MongoDB");

        // insertMany records into employee
        return Employee.insertMany([
            { "emp_name": "Ray Renolds", "age": 32, "location": "Austin", "email": "rayr@somewhere.com" },
            { "emp_name": "Matt Aniston", "age": 25, "location": "Houston", "email": "matta@somewhere.com" },
            { "emp_name": "Monica Perry", "age": 23, "location": "New Jersey", "email": "monicap@somewhere.com" },
            { "emp_name": "Rachel Tribbiani", "age": 28, "location": "Boston", "email": "rachelt@somewhere.com" }
        ]);
    })
    .then(() => {
        console.log("Records inserted successfully");

        // Find all documents in employees collection after insertMany
        return Employee.find();
    })
    .then((data) => {
        console.log("\nDocuments in employees collection after insertMany:");
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });