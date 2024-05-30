// ------------------------------------Miss Class Work "Loops with Increment & Nested Loop"--------------------------------------
//loops :execute same block of code (repation of work)
//for, while & dowhile

//* init 
//*cond
//*inc dec

//1- for loop
// for(var k=1; k<=5; k++){
//     document.write(k + "bushra <br>");
// }

//2-while
// let o= 5;
// while(o<=50){
//     document.write(o + "ali <br>");
//     o++;
// }

//3-do while
// let u = 80;
// do{
//     document.write(u + "maviz <br>");
//     u++;
// }
// while(u<=200);

//nested loop: loop inside another loop
// for(var i=1; i<=3; i++)//outer loop
// {
// for(var j =1; j<=3; j++) //inner loop
// {
//    document.write(i , j ,"<br>");
// }
// document.write("<br>");
// }


// for(var i=1; i<=3; i++)//outer loop
// {

//    document.write(i ,"<br>");

// }

// ------------------------------My Class Work "Do the Loops Practice with Decrement & Print 2 Table"--------------------------------------
// 1) For with Dec
// for(var i=5; i>=1; i--)
// {
// document.write(i + "For Loop <br>");
// }

// 2) while with dec
// var m=5;
// while(m>=1)
// {
//     document.write(m + "While Loop <br>");
//     m--; 
// }

// 3) Do While Loop
// var n = 5;
// do
// {
//     document.write(n + "Do While Loop <br>");
//     n--;
// }
// while(n>=1)

// Print 2 Table
// var u = 2;
// for(var i = 1; i<=10; i++)
// {
// document.write(u + "*" + i + "=" + u*i + "<br>");
// }

// Assignment Ptint Star Paramid with Nested Loop
for(var i = 1; i<=5; i++)
{
    for(var j=1; j<=i; j++)
    {
        document.write("*");
    }
    document.write("<br>");
}