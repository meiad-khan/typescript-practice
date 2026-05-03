
const kgToGm = (input: number | string) => {
  if (typeof input === 'number') {
    return input * 1000;
  }
  else if (typeof input === 'string') {
    const value = input.replace(/[^0-9]/g, "");
    return Number(value) * 1000;
  }
}
// console.log(kgToGm(20));
const result1 = kgToGm(2) as number;
console.log({result1});
const result2 = kgToGm('2 kg') as number;
console.log({ result2 });