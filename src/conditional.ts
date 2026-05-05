type A = null;
type B = undefined;
type C = A extends null ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};
type checkVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;
type hasBike = checkVehicle<'cycle'>;

// conditional type :  je type condition er upor nirvorsheel

// type A = null;
// type B = undefined;

// type C = A extends number ? true : B extends undefined ? true : false;

// type RichPeoplesVehicle = {
//   bike: string;
//   car: string;
//   ship: string;
// };

// type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

// type HasBike = CheckVehicle<"tractor">;