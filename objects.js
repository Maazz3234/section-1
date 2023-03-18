let user ={name:'maaz',email:'maazsid@mal.com',password:25252};
console.log(user.password);
console.log(user['name']);
user.address="lucknow";
console.log(user);
user.email='raju@hotmail.com';
console.log(user);
delete user.password;
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

let smartphone={
brand:'samsung',
model:'s23 utlra',
price:78000,
color:'white'
}
console.log(smartphone.color);
smartphone.color=['white','red','black'];
console.log(smartphone);
// push(s1)
smartphone.color.push('blue');
console.log(smartphone);