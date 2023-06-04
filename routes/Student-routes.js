import express from 'express';
import Student from '../model/Student.js';
import { getAllStudent,addStudent,getById,updateStudent,deleteStudent} from '../controllers/student-controller.js'
const router = express.Router();




router.get('/' ,getAllStudent);
router.post('/',addStudent );
router.get('/:id',getById);
router.put('/:id',updateStudent);
router.delete('/:id' ,deleteStudent);
export default router;
