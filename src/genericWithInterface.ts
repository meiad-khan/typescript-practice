interface Student<T = null, B = null> {
  id: number;
  name: string;
  district: string;
  hasLaptop: boolean;
  hasCar?: T;
  hasBike?: B;
}
interface Car {
  brand: string;
  releasedYear: string;
  color: string;
}
interface Bike {
  brand: string;
  speed: string;
  color: string;
  price: string;
}

const user: Student<Car, Bike> = {
  id: 123,
  name: "meiad",
  district: "barishal",
  hasLaptop: true,
  hasBike: {
    brand: "yamaha",
    speed: "200cc",
    color: "balck",
    price: "200k",
  },
};
console.log({ user });


// interface Developer<T, X = null> {
//   name: string;
//   salary: number;
//   device: {
//     brand: string;
//     model: string;
//     releasedYear: string;
//   };
//   smartWatch: T;
//   bike?: X;
// }

// interface BrandCharaWatch {
//   heartRate: string;
//   stopwatch: boolean;
// }

// interface AppleWatch {
//   heartRate: string;
//   callSupport: boolean;
//   calculator: boolean;
//   AiFeature: boolean;
// }

// const poorDeveloper: Developer<
//   BrandCharaWatch,
//   { brand: "Yamaha"; engineCapacity: "200cc" }//--> here 'Yamaha' and '200cc' is not string, they are literal type. if bike exist, the value should be exactly like this...
// > = {
//   name: "Mr. Poor",
//   salary: 20,
//   device: {
//     brand: "lenovo",
//     model: "A21",
//     releasedYear: "2010",
//   },
//   smartWatch: {
//     heartRate: "200",
//     stopwatch: true,
//   },
// };

// const richDeveloper: Developer<AppleWatch> = {
//   name: "Mr. Rich",
//   salary: 100,
//   device: {
//     brand: "hp",
//     model: "X34",
//     releasedYear: "2050",
//   },
//   smartWatch: {
//     heartRate: "200",
//     callSupport: true,
//     calculator: true,
//     AiFeature: true,
//   },
//   bike: null,
// };

// const add = (num1: number, num2: number = 0) => num1 + num2;

// add(2);
