import studentModel from "../models/studentModel";

class StudentService{
    static async createStudent(studentData:{name:string;age:number;email:string}){
        const student=new studentModel(studentData)
        return await student.save();
    }


 static async getAllStudents(){
    return await studentModel.find()
 }

 
 static async getStudenById(email:string){
     
    return await studentModel.findOne({email:email})
 }


 static async udpdateStudent(email:string,studentData:{name:string;age:number;email:string}){
    return await studentModel.findOneAndUpdate({email},studentData,{new:true})
 }

 static async deleteStudent(email:string){
    return await studentModel.findOneAndDelete({email})
 }

}


export default StudentService;