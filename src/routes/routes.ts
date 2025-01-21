import { Router } from "express";

import StudentController from "../controllers/studentController";

const router = Router()

router.get('/',StudentController.getAllStudents);
router.post('/adduser',StudentController.createStudent);
router.get('/:email',StudentController.getStudentById)
router.patch('/update/:email',StudentController.updateStudent)
router.delete('/delete/:email',StudentController.deleteStudent)





export default router