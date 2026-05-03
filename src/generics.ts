
type GenericArray<value> = Array<value>;

const friends: GenericArray<string> = ['meiad', 'mahid', 'minhaj'];
const nums: GenericArray<number> = [3, 4, 3];
// console.log(nums);
// console.log(friends);

type Coordinates<X, Y> = [X, Y];
const coordinate1: Coordinates<string, number> = ['meiad', 34];
const coordinate2: Coordinates<boolean, string> = [true, '34'];


type User = {
  id: number;
  name: string;
  designation: string;
  role?: 'admin' | 'user';
}
const userList: GenericArray<User> = [
  { id: 12, name: 'meiad', designation: 'ceo', role: 'admin' },
  {id:13, name:'mahid', designation:'ceo'}
]
console.log({userList});