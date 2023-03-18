for( let i=0;i<10;i++){
    console.log(i);
}
for(let i=0;i<100;i++)
{
    if(i%7==0||i%13==0){
    console.log(i);
    }
}
let[a,b]=[0,1];
for(let i=0;i<10;i++)
{
    let c=a+b;
    console.log(c);
    [a,b]=[b,c];
}
let num=5;
let f=1;

for(let i=2;i<=num;i++)
{
    console.log(f);
    f=f*i;
}
 let mynum=3654;
 for(let i=2;i<mynum;i++){
     if(mynum%i==0){
        prime=false;
        console.log('not prime');
        break;
     
 }
if(prime)console.log('prime');
let n1=37654;
let reverse=0;
while(n1>0){
    console.log(reverse);
    let r=n1%10;
reverse=reverse*10+r;
n1=parseInt(n1/10);
}
console.log(reverse);
 }