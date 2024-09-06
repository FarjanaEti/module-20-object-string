const mobile={
     brand:'samsang',
     price:2000,
     color:'black',
     camera:"12inc",
     isnew:true,
     car:{
        cbrand:'bmw',
        gpa:5,
        speciality:{
           merit:'top'                   
        }                      
     }
}
console.log(mobile.car.speciality.merit);
console.log(mobile.car['speciality']);
// delete mobile.camera;
// console.log(mobile)
for(const mbl in mobile){
//     console.log(mbl)                          
    console.log(mobile[mbl])                          
}