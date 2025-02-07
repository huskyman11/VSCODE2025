
/*-------------------
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.------------------------------------*/
// Question 1: 

    /*used the .length command on the array and subtracted 1 to get the last item in the array, and then subtracted the position 0 for the first item*/
   
    // 

    let agesArray = [3, 9 , 23, 64, 2, 8, 28, 93];
console.log("The Ages Array contains ", agesArray);

console.log(agesArray[agesArray.length-1]-agesArray[0]);

agesArray.push(14); 
/* added the number 14 into the array*/

console.log(agesArray[agesArray.length-1]-agesArray[0]);

let avg = 0;

for(let i = 0; i < agesArray.length; i++) {

avg += agesArray[i];}

console.log(avg);
/* taking items added up and dividing them by the total length of the array to find the avg number */

averageAge = (avg / agesArray.length);

 
console.log("The average age is ",averageAge);

    
/*
    Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
removed commas: https://stackoverflow.com/questions/20118846/how-to-replace-comma-in-an-array-to-using-javascript

    Use a loop to iterate through the array and calculate the average number of letters per name.

Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
//Part 1//
    let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

    //Part 2//

    together = namesArray.join(``);
    console.log(together);
console.log("The total number of letters is ", together.length)


    let together2 = 0;

    for(let i = 0; i < namesArray.length; i++) { 
    together2 += namesArray[i].length;
    console.log(together2);
} 

    let avgCharacters = together2 / namesArray.length; 
    console.log("The Average amount of characters per name is ", avgCharacters);
    
       //Part 3//
   let combineNames = "";
   for (let i = 0; i < namesArray.length; i++){
    combineNames = combineNames.concat(namesArray[i]+ ` `);
   
    console.log(combineNames);}


/*---How do you access the last element of any array?----
To get to the last one, find the length of the array and subtract 1 because the array starts at the number zero--(using the reference of the array length minus 1)--*/

console.log(namesArray[namesArray.length-1]);

/*How do you access the first element of any array?    (by using the zero index number) */
    
console.log(namesArray[0]);

// /* Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
//     /*/ //

        namesArray.push("Kelly", "Sam", "Kate");

 let nameLengths = []
 for (let i = 0; i < namesArray; i++) {
 nameLengths.push(names[i].length); 
 console.log( "Name Lengths Array:", nameLengths);}

    




// /*  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. */

// for (let i = 0; i < namesArray; i++) {nameLengths = [5, 3, 4]), console.log(namesArray)

// };  
let lettersTally = 0
 for (let i = 0; i < nameLengths.length; i++) {
    console.log(lettersTally += nameLengths[i]);
 }



// /*Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
// */

function twoParam (word, n) {
    let combine = word.repeat(n);
    console.log(combine);
};

twoParam(`Hello`, 3);



// /* Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
// */

// let firstName = "Sammy";
// let lastName = "Davis";

function fullName (firstName, lastName) {
    let fullName = firstName + " " + lastName
    console.log(fullName);
}
fullName("Sammy", "Davis");



// /* Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. */

let addingArray = [95, 85 ,75 ,65 ,55];
let addingArray2 = [9,8,7,6,5];

function addingNumbers(array) {
    let sum=0; 
    for(let i =0; i < array.length; i++){
       sum += array [i];
       console.log(sum);
    }
    if (sum > 100) {console.log("TRUE"); return true}
    else {console.log("FALSE"); return false}
}
addingNumbers(addingArray);
    addingNumbers(addingArray2);

// /* Write a function that takes an array of numbers and returns the average of all the elements in the array. 
// wrote the loop to add each position's value in the array, then divide that value by the number of positions in the array*/


function averageArray(array){
    let sum = 0; 
    for (let i=0; i < array.length; i++){
        sum += array[i];

    }console.log(sum / array.length)
} ;
averageArray(addingArray);
averageArray(addingArray2);



// /* Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
// */

function averageHigher(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;

    for (const spot of array1) {
        sum1 += spot;
    console.log(spot, sum1);    }

    for (const spot of array2) {
        sum1 += spot;
    console.log(spot, sum2);    }

let avg1 = (sum1 / array1.length);
let avg2 = (sum2 / array2.length);

if (avg1 > avg2) {
    console.log("TRUE"); return true;}
    else if (avg1 < avg2) {console.log("FALSE");return false; }

}
    
averageHigher(addingArray, addingArray2);





// /* Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.  Wrote an else if statement where the 2 outcomes provided the output for the problem*/

// let isHotOutside = Boolean
// let moneyInPocket = Number

function willBuyDrink(isHotOutside, moneyInPocket) {if (isHotOutside === true && moneyInPocket >= 10.50){return true;} else if (isHotOutside === false || moneyInPocket < 10.50){ return false;}
}

console.log(willBuyDrink(false, 19));


// /* Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// */

function cubicInches(height, weight, depth) {cubed = height * weight * depth;

console.log("The cubic inches of the item are:", cubed);}


cubicInches(24, 3, 18);


// /* created the quick calculator to find out what the volume of a container is in cubic inches , this can be used for quickly figuring out math problems in the woodshop*/


