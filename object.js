const student={
  st_id:21024,   
  name:'Eti',
  session:'20-21',
  subject:'cse',
  isgood:true ,
  chapter:['first','second','last'],
  "fav_student":['a','b','c'],
  exam:{
     nameOfexam:'data',
     marks:100,
//      accelarate:function(){
//      console.log('goooooooo')  
//      }                       
  }                        
}
student.session='22-23';
const keys=Object.keys(student);
// console.log(keys);
// console.log(typeof student)
// // student.accelarate();
// console.log(student.subject)
// console.log(student.session)
// console.log(student['isgood'])
// console.log(student)
console.log(student.exam.marks)