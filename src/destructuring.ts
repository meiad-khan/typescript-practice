//array destructuring

const frineds:string[] = ["meiad", "mahid", "minhaj"];
// const [a:ab, b, c] = frineds; --> array destructuring ee rename possible na.
const [, , chotobhai] = frineds;
const [, mejhobhai] = frineds;
// console.log(mejhobhai);

// console.log(chotobhai);


//object destruutring
const user = {
  id: 123,
  name: {
    firstName: 'meiad',
    lastName: 'khan',
    
  },
  favouriteColor: 'black'
}
const { favouriteColor:myFavouriteColor } = user;
// console.log(myFavouriteColor);
const { name:{firstName:fName, lastName:lName} } = user;
console.log(fName, lName);
