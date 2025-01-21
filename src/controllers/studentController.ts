import { Request,Response,NextFunction } from "express";
import StudentService from "../services/studentService";


class StudentController{

    static async createStudent(req:Request,res:Response,next:NextFunction):Promise<void>{
        try {
         const student =   await StudentService.createStudent(req.body);
             res.status(201).json({message:'student created sucess',student});
             return
        } catch (error) {
             res.status(500).json({message:'error creating a student'})
             return
        }
    }


    static async getAllStudents(req:Request,res:Response):Promise<void>{
        try {
            const students=await StudentService.getAllStudents()
            res.status(200).json(students)
            return
        } catch (error) {
            res.status(500).json({message:'error when fetching students'})
            return 
        }
    }


    static async getStudentById(req:Request,res:Response):Promise<void>{
        try {
            const student=await StudentService.getStudenById(req.params.email)
            if(!student){
                res.status(404).json({message:'student not found'})
                return 
            }
            res.status(200).json(student)
            return 
        } catch (error) {
            res.status(500).json({message:'error fetching user while this time'})
            return
        }
    }

    
    static async updateStudent(req:Request,res:Response):Promise<void>{
        try {
            const student = await StudentService.udpdateStudent(req.params.email,req.body);
            if(!student){
                res.status(404).json({message:'student not found'})
                return
            }
            res.status(200).json('student updated sucess')
            return 
        } catch (error) {
            res.status(500).json({message:'error when updating a student'})
            return
        }
    }



    static async deleteStudent(req:Request,res:Response):Promise<void>{
        try {
            const student = await StudentService.deleteStudent(req.params.email)
            if(!student){
                res.status(404).json('student not found')
                return
            }
            res.status(200).json('student delted sucess')
            return
        } catch (error) {
            res.status(500).json('something went wrong from our side')
        }
    }




}



export default StudentController;