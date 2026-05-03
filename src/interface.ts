interface IUser{
  name: string;
  designation: string;
  age: number;
};

interface UserWithRole extends IUser{
  role: 'admin' | 'user';
}

const user: UserWithRole = {
  name: "meiad khan",
  designation: "student",
  age: 22,
  role: "admin",
};
// console.log(user);

// interface IAdd{
//   (num1: number, num2: number): number;
// }

//type alias
// type Add = {
//   (num1: number, num2: number): number;
// }
type Add = (num1: number, num2: number)=> number;
const add:Add = (num1, num2) => num1 + num2;
console.log(add(20, 30));