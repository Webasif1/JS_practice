//**For
// 1-100

// if you know the number of iterations in advance then for loop is preferred.
// for(start; end; update){
    // code
// }
for(let i=1; i<=100; i++){
    console.log(i);
};


//**while
// Start
// while(end){
  // code
  // update
  // }

// if your condition is false initially then while loop will not execute even once.
let a = 1;
while(a<=100){
    console.log(a);
    a++;
}


//**do-while
// start
// do{
    // code
    // update
// } while(end);

// if your condition is false initially then also do-while will execute at least once.
let j = 29;
do{
    console.log (j);
    j++;
} while(j<=100);


//**loop break example

for(let k=1; k<=100; k++){
console.log(k);
if(k==50){
    break; // when k is 50 loop will break
}
};
