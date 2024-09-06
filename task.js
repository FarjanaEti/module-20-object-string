const colors = {
 red: "#ff0000",
 green: "#00ff00",
 blue: "#0000ff",
 "golden rod": '#daa520'
};
console.log(colors["golden rod"])
const key=Object.keys(colors);
console.log(key)
const count=key.length;
console.log(count)
// const value=Object.values(colors);
// console.log(value)
colors.violet_color='#4346374';
// console.log(colors)
// ---------------task-3---------
const student = {
  name: "Hamim Sakep",
 id: 5421,
 physics: {
   subject: "HSC Physics",
   author: "Shahjahan Tapan",
  marks: 30
}
 };
 console.log(student.physics.marks)