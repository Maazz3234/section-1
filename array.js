let movies=[ 'RRR','PK','RUN','PAthaan','KGF'];
// indexing
console.log(movies[4]);
console.log(movies.indexOf('RUN'));
console.log(movies.at(-1));
console.log(movies.length);

// Slicing
console.log(movies.slice(2,4));

//Adding  Elements in array
console.log( ['Batman',...movies,'Farzi'] );
console.log( [...movies,'Farzi'] );
console.log(movies);
console.log(...movies.slice(0,4),'Barfi',...movies.slice(4));
// removing elments fromm arraay

console.log(movies);
movies.pop();
console.log(movies);
movies.shift();
console.log(movies);

// removing multiple elemnts from array
movies=[...movies,'flash','exit 14','nh10']
console.log(movies);
movies.splice(2,1);
console.log(movies);