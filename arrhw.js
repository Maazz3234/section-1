// add element at 4 position
 const numbers=[00,11,22,33,44,55,66,77,88]
console.log(...numbers.slice(0,4),'65',...numbers.slice(4,9));

// replace element at 4th position
console.log(...numbers.slice(0,4),'65',...numbers.slice(5,9));

// five friend names
const names=['ze','re','maaz','lake']
console.log(names[2].slice(0,3));

// given array ['₹3400', '₹845', '₹20', '₹940', '₹3700'] convert all the elements to number
 let prices=['₹3400', '₹8454', '₹20', '₹940', '₹3700'];
let newPrices=prices.map((p)=>{return parseInt(p.slice(1))})
console.log(newPrices);

// filter all non perfect sqaures from the given array
let arr=[4,6,9,15,16,20,25,36,40,64,65]
let res=arr.filter((n)=>{return n**0.5===parseInt(n**0.5)});
console.log(res);


// create a function that takes an array and index as parameter and removes the single elment on that indecx
const eleRem=(arr,i)=>{
    arr.splice(i,1);
    return arr;
}
let res5=eleRem(arr,3);
console.log(res5);
