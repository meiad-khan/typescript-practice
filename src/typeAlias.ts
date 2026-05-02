type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string
  };
  gender: 'male' | 'female';
  age: number;
  height: string;
} 


const user1:User = {
  id: 123,
  name: {
    firstName: 'meiad',
    lastName:'khan'
  },
  gender: 'male',
  age: 22,
  height:"5'11''"
}
// console.log(user1);


const user2: User = {
  id: 234,
  name: {
    firstName: 'mahid',
    lastName:'khan'
  },
  age: 20,
  gender: 'male',
  height:"5'9''"
}
console.log(user2);