//p1
console.log(hello); //undefined                                   
var hello = 'world';
// var hello;
// console.log(hello); //undefined                                   
//  hello = 'world';

//p2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);// magnet
}
// var needle ;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle); 
// }

// needle = 'haystack';
// test();

//p3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);//super cool
}
console.log(brendan);
//var brendan;
// function print(){ // didnt be called
//     brendan = 'only okay';
//     console.log(brendan); 
// }
// brendan = 'super cool';
// console.log(brendan); 

//p4
var food = 'chicken';
console.log(food); // chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); // half-chicken
    var food = 'gone';
}
// var food ;
// function eat(){
//      var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }

//  food = 'chicken';
// console.log(food);
// eat();

//p5
// mean(); // error not a function 
// console.log(food); //error not defined
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);//error not defined
// var mean;
// mean(); 
// console.log(food); //error
//  mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food); //error

//p6
console.log(genre); // undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //rock
    var genre = "r&b";
    console.log(genre); //r&b
}
console.log(genre); //disco
// var genre ;
// function rewind() {
//     var genre ;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//  genre = "disco";
// rewind();
// console.log(genre);
//p7
dojo = "san jose";
console.log(dojo); //san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //seattle
    var dojo = "burbank";
    console.log(dojo); //burbank
}
console.log(dojo); // san jose
//var dojo;
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//       dojo = "burbank";
//     console.log(dojo);
// }

// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

//p8
console.log(makeDojo("Chicago", 65)); //{name:"Chicago",students:65,hiring:true}
console.log(makeDojo("Berkeley", 0));//error
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // you cant assign value to constant variable
    }
    return dojo;
}
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));