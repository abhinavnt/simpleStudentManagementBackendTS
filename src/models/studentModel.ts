 import mongoose,{Schema,Document} from 'mongoose'


 interface IStudent extends Document{
    name:string;
    age:number;
    email:string;
 }



 const studentSchema=new Schema<IStudent>({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true}
 })



 export default mongoose.model<IStudent>('Student',studentSchema);