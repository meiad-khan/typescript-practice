
const createGenericArray = <T>(value:T) => [value];

// console.log(createGenericArray({
//   name: 'meiad',
//   occupation: 'student',
//   designation:'ceo'
// }));

const genericTuple = <X,Y> (param1:X, param2:Y) => [param1, param2];
// console.log(genericTuple('3',true));


const addStudentToCollege = <T> (studentInfo:T) => {
  return {
    course: 'Next level web development',
    ...studentInfo
  }
}

const student1 = {
  id: 34,
  name: 'sohan',
  hasCar:true,
}
const student2 = {
  id: 23,
  name: 'shafinur',
  hasCar:false,
}
console.log(addStudentToCollege(student2));




// Generic Function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };

// const createArrrayWithGeneric = <T>(value: T) => {
//   return [value];
// };

// const arrString = createArrrayWithGeneric("Apple");
// const arrNum = createArrrayWithGeneric(222);
// const arrObj = createArrrayWithGeneric({
//   id: 123,
//   name: "Next Level",
// });

// // tuple

// const createArrayWithTuple = (param1: string, param2: string) => [
//   param1,
//   param2,
// ];

// const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
//   param1,
//   param2,
// ];

// const res1 = createArrayTupleWithGeneric("Mezba", false);
// const res2 = createArrayTupleWithGeneric(222, { name: "Mezba" });

// //

// const addStudentToCourse = <T>(studentInfo: T) => {
//   return {
//     course: "Next Level",
//     ...studentInfo,
//   };
// };

// const student1 = {
//   id: 123,
//   name: "Mezba",
//   hasPen: true,
// };

// const student2 = {
//   id: 321,
//   name: "Jhankar Mahbub",
//   hasCar: true,
//   isMarried: true,
// };

// const result = addStudentToCourse(student2);
// console.log(result);