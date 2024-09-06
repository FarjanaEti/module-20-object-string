let myObject={
name: 'John Doe',
 age: 25,
 city: 'Example City',
 isStudent: true                         
}
// key: name | type:  string
for(const me in myObject){
 console.log('keys:', me,'|', 'type:',typeof myObject[me])                           
}