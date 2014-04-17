/**
 * Conditionals Personal Created by Phirom Yim on 4/17/14.
 */
//if condition is true print to console
//calculate the recipe for making coffee in a french press

var beans; //declare variable for coffee beans in grams
beans = 7;//define coffee bean grounds in grams
var water;// declare amount of water needed to make coffee
water = 8; //define water ounce
//user input how many cups of coffee they will have today
var cup = Number(prompt ("Enter how many cups of coffee you will have today"));
//a cup of coffee is equal to beans times water
//if cup is equal to 1 serving print
var cupMin = beans * water;//cup minimum is amount of beans times amount of water
dailyCup = cup * cupMin; //daily cup is user input times the cup minimum
//if a user drinks more than 1 cup that is equal to 56 ounces then statement is true
//if the daily cup is greater than the single serving of cup minimum print
if(dailyCup <= cupMin){
    console.log("Good morning, enjoy your coffee!");
    //print to console if true
}else{
    console.log("You need to grind" + " " + (beans * cup)+ "g of beans" + " " + "and boil" + " " +(water * cup)+ "oz of water to make" + " "+ cup + " " + "cups of coffee!");
    //print to console if false
}
alert("You need to grind" + " " + (beans * cup)+ "g of beans" + " " + "and boil" + " " +(water * cup)+ "oz of water to make" + " "+ cup + " " + "cup(s) of coffee!");

