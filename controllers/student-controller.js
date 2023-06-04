import Student from '../model/Student.js';
//const { param } = require("../routes/Student-routes");



export const getAllStudent = async (req, res, next) => {
  let student;

  try {
    student = await Student.find();
  } catch (err) {
    console.log(err);
  }

  if (!student) {
    return res.status(404).json({ message: " Student is not Present" });
  }

  return res.status(200).json({ student });
};

 export const getById = async (req, res, next) => {
  let  id = req.params.id;
  let student;
  try {
    student = await Student.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!student) {
    return res.status(404).json({ message: " student not found" });
  }
  return res.status(200).json({ student });
};


 export const addStudent = async (req, res, next) => {
  const { name, studentId ,branch,year,contact,email} = req.body;
  let studentdata;

  try {
    studentdata = new Student({
        name,
        studentId,
        branch,
        year,
        contact,
        email,
    });

    await studentdata.save();
  } catch (err) {
    console.log(err);
  }

  if (!studentdata) {
    return res.status(500).json({ message: "Unable to add student" });
  }

  return res.status(201).json({ studentdata });
};

 export const updateStudent = async (req, res, next) => {
    const id = req.params.id;
  
  const { name, studentId ,branch,year,contact,email} = req.body;
  let student;
  try {
    student =  await Student.findByIdAndUpdate(id, {
      name,
      studentId,
      branch,
      year,
      contact,
      email,
    });
    student = await student.save();
  } catch (err) {
    console.log(err);
  }
  if (!student) {
    return res.status(404).json({ message: "Unable to update student" });
  }

  return res.status(200).json({ student });
};

 export const deleteStudent = async(req,res,next) => {

    const id = req.params.id;
    let student ;
    try{
        student = await Student.findByIdAndRemove(id);
    } catch(err){
        console.log(err);
    }
    if (!student) {
        return res.status(404).json({ message: "Unable to delete student" });
      }
    
      return res.status(200).json({ message:"Student Successfully deleted" });
};

export  default Student ;