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
let i = 1;
while(i<=100){
    console.log(i);
    i++;
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
