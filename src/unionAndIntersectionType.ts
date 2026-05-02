
//union type = '|'

type UserRole = 'admin' | 'user';
const getDashboard = (role: UserRole) => {
  role === 'admin' ? console.log('adming dashboard') : console.log('userDashboard');
}
getDashboard('user');

//intersection type = '&'
type Employee = {
  id: number;
  name: string;
  gender: 'male' | 'female';
  phone:string
}
type Manager = {
  designation: string;
  teamSize: number;
};
type EmployeeManager = Employee & Manager;
const user: EmployeeManager = {
  id: 3344,
  name: 'meiadkhan',
  gender: 'male',
  phone: '9494949',
  designation: 'CEO',
  teamSize: 34
};
console.log(user);