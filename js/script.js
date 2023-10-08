"use strict";

let student={
        name:"Leandro",
        favoriteFood:"Spaghetti",
        city:"Paris",
}

let res = 0;

Object.values(student).forEach((values)=> {
    res += values.length;
})

console.log(res);

if (res%2==0){
    console.log("pair");
}
else{
    console.log("impair");
}