"use strict";
/* console.log(1);
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
leftBorderWidth = 16;
console.log(leftBorderWidth);
const obj = {
	a : 5
};

obj.a = 150;
console.log(obj);

console.log(name);
var name = "Dias";


// snake_case
// camelCase
//UPPER_SNAKE_CASE
// kebab-case
// PascalCase

/*const obj = {
    Name : "Dias",
    Age : 22,
    isMarried : false

};
console.log(obj.isMarried);

let arr = ["apple.jpg", "banana.png", 6, "ada", { }, []];
console.log(arr[1]);

const arrObj = {
    0: "a",
    1: "b"
};
arrObj.a = "7232";
console.log(arrObj["a"]);
*/
//const answer = confirm("Are u here?");
//console.log(answer);

/*const answer = +prompt("Are you 18 yrs old?", "18");
console.log(answer + 5); */
/*const ans = [];
ans[0] = prompt("What is your name?", "");
ans[1] = prompt("What is your surname?", "");
ans[2] = prompt("What is your age?", "");

document.write(ans);*/

/*let incr = 10,
    decr = 10;

incr++;
decr--;
console.log(incr);
console.log(decr);

console.log(5%2)

const isChecked = true,
      isClosed = false;

console.log(isChecked && isClosed);

const isChecked = true,
      isClosed = false;

console.log(isChecked || isClosed);*/

const numberOfFilms = +prompt ("Сколько вы уже фильмов посмотрели?", "");
   
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors:{},
	genres:[],
	privat:false
};

const a = prompt ("Один из просмотренных фильмов", ""),
	b = prompt ("На сколько оцените его?", ""),
	c = prompt ("Один из просмотренных фильмов", ""),
	d = prompt ("На сколько оцените его?", "");
	

personalMovieDB.movies[a] = b;
personalMovieDB.movies[d] = c;
console.log(personalMovieDB);
 