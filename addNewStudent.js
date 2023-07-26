const express = require('express');
const mongoose = require('mongoose');
const app = express();
const quiz = require('./quizSchema'); // Import the quizSchema

app.listen(3000, () => console.log('Listening on port 3000!'));

//Connect to MongoDB server & create a database
mongoose.connect('mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exams23002', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to add a new student
async function addNewStudent() {
  try {
    // New book details
    const newStudent = {
      sid: "300365488",
      name: "Marchynska Nadiia",
    };

    // Create the new book document
    const addedStudent = await quiz.insertMany(newStudent);
    console.log('New student added successfully:', addedStudent);
  } catch (err) {
    console.error('Error adding a new student:', err);
  } finally {
    mongoose.connection.close(); // Close the MongoDB connection after adding the student
  }
}

// Call the function to add the new student
app.get("/",(req,res)=>{

   
  res.send(addNewStudent());
 
  console.log("record added to database")
})
