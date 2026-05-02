//spread
const bondhu: string[] = ['meiad', 'mahid', 'mahid'];
const collegeBondhu: string[] = ['tahmid', 'sium', 'fardin'];
const uniBondhu:string[] = ['mizan', 'masfique', 'abrar'];
bondhu.push(...collegeBondhu, ...uniBondhu);
console.log(bondhu);
const allBondhu = [...bondhu, ...collegeBondhu, ...uniBondhu];
// console.log(allBondhu);



//rest operator
const biyerDawat = (...friends: string[]): void => {
  friends.forEach((friend: string) => console.log(`Send invitation to ${friend}`));
}

biyerDawat('meiad', 'mahid', 'minhaj', 'raihan', 'emon', 'sium');


