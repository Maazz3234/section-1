let nums=[11,22,53,64,54];
for(let i=0;i<nums.length;i++)
if(nums[i]%2==0){
    console.log(nums[i]);
}
let newarr=[];
// for each loop:for-of-loop
for(let n of nums ){
    if(n%2==0){
        console.log(n);
        newarr.push(n)
    }
}
console.log(newarr);
// filtering in array
let res=nums.filter((n)=>{return n%2==0});
console.log(res);
let res2=nums.map((a)=>{return a*2});
console.log(res2);
const prices=[1200,350,3250,5890,3990];
let res3=prices.map((a)=>{return a-a/10});
console.log(res3);
