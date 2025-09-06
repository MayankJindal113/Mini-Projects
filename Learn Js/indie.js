// SRC CODE "CODE WITH HARRY"
//Video Reference:: https://www.youtube.com/watch?v=hKB-YGF14SY



// var a=46;
// var b=23;
// alert(a+b);


// JS Variables:Container to store data
// Primitive Data type : number, string ,undefined, null, boolean
// Reference Data type : array, objects

// var a=78;
// var b=22;

// var s='Hi';
// var s2="So shh";
// var df=9.09;


// Objects
// var marks={
//     rahul:90,
//     mayank:34,
//     Ruby: 'NA'
// }

// alert(marks.mayank);
// var a= true
// var und = undefined;
// var n= null;
// var jjj


// OPERATORS :
// Arithematic + - * /
// Assignment =
// Comparison >= <= ==
// Logical  &&  ||  !

// a=true;
// b=false;
// console.log('The or operation of ', a,'and ', b, 'is ',a||b);


// Array
// var arr= [1,"red", 'yellow',"This is a string",8.2,false]
// var i=0;
// while(i<arr.length)
// {
//     console.log(arr[i]);
//     i=i+1;
// }




// FUNCTIONS
// function sq(k)
// {
//     return (k*k);   
// }

// a=12;
// e =sq(a);
// alert(e);


// function allow()
// {
//     var age;
//     age= document.getElementById("input_btn").value;
//     if(age<20)
//     {
//         console.log("Under Age")
//         alert("Cum another time");
//     }
//     else if(age>=20)
//     {
//         console.log("Good to go");
//         alert("Daddyyyyy!!");
//     }
//     else{
//         console.log("Harder")
//     }
// }
// allow();






// Conditional Statements in JS :

// var h=10;
// h=90;
// if(h<20)
// {
//     console.log("This is not the right time")
//     alert("Come another time");
// }
// else if(h<30)
// {
//     console.log("Right time")
// }
// else{
//     console.log("Harder")
// }





// Loops in JS  (FOR, WHILE, DO WHILE):

// var arr = [1,2,3,4,5,6];
// console.log(arr);
// for(var i=0; i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// Can also use :

// arr.forEach(function(element){
//     console.log(element);
// })


// for(var j=0; j<arr.length;j++){
//     console.log(arr[j]);
// }

// 
// Do{}
// while();




// const abc=0;
// abc++;//Gives error as its const

// let j=0; // Block level use : Function - Local variable

// In case of do while The loop always runs atleast once
// do {
//     // console.log(arr[j]);
//     j++;
// }
// while(j<arr.length);





// BREAK AND CONTINUE
// Break: Comes out of the loop once called
// Continue: Skips the present iteration and continues for others

// var adde=0;
// while(adde<10)
// {
    
//     adde++;
//     if(adde==7)
//     {
//         break;
//     }
//     else if(adde==4)
//     {
//         continue;
        //Cancel this particular iteration 
        //But continue with the loop
//     }
   
//     console.log(adde);
    
// }





// ARRAY METHODS IN JS:

// var arro=['abc',"hi" ,'Friends',false,23];
// console.log(arro);

// // arro.pop();
// // arro.push("YO BITHC");
// // arro.shift();
// arro.unshift(true);

// console.log(arro);





// STRING METHODS IN JS:
// let str= "We both are best friends both";
// console.log(str.slice(3,5));
// console.log(str.lastIndexOf('both'));
// console.log(str.indexOf('both'));
// newstr= str.replace("both","all");
// console.log(newstr);


// DATES IN JS:

let dat=new Date();
// alert("Today is "+ dat.getDate()+'||' +dat.getMonth()+'||'+dat.getFullYear());

// dat.getSeconds();
// dat.getMonths()
// Can explore more.......




// DOM MANIPULATION IN JS:
// Document Object Model
// Dynamically alter the css of elements in the document
// document.getElementById('hi').style.background='black'
// document.getElementById('hi').style.background='white'
document.getElementById('hi').style.border='red 10px dashed'

// let elem = document.getElementsByClassName("contianer");
// console.log(elem);
// elem[0].style.background="red";

divis=document.getElementsByTagName('div')

console.log(divis)
// Here we can call all same tag bu one go ex. all the buttons
// and then work on them at one time


createdelem=document.createElement('h1');
createdelem.innerText="This is a created H1"
divis[0].appendChild(createdelem);

create2= document.createElement('b');
create2.innerText="Created text to Bold";
divis[0].replaceChild(create2,createdelem);



// QUERY SELECTOR
// Selection using Query just like in css
que= document.querySelectorAll('div')
console.log(que)


// EVENTS in JS
// like clicking, scrolling, zooming,mouseover,  etc...
// onclick event onmouse, onload, 



// window.onload= function(){
//         console.log('The document was loaded')
//         // alert('Redirecting to the ECON TIET\'s Website')
// }

// clickres.addEventListener('click',function(){
//         console.log('Click Hua')
// })
// first.addEventListener('mouseover',function(){
//         console.log('Mouse on Container')
// })
// first.addEventListener('mouseout',function(){
//         console.log('Mouse out of Container')
// })


let storedat=document.querySelectorAll('#first')[0].innerHTML;

document.querySelectorAll('#first')[0].addEventListener('mouseup',function(){
        document.querySelector('#first').innerHTML=storedat; 
        console.log("Mouse up")
})

document.querySelectorAll('#first')[0].addEventListener('mousedown',function(){
        document.querySelector('#first').innerHTML= "<b>This is the replaced html once hoverd upon</b>";
        console.log("Mouse down")
})




// Arrow Funcitons

// function sum(a,b){
//         return a+b;
// }
// Instead::


sum=(a,b)=>{
        return a*b;
}


// SetTimeout SetInterval


fun=()=>{
        alert("Session Timed Out Login Again");
        document.querySelector('#pork').innerHTML='<b>Replaced Text </b>'
}


abc =setTimeout(fun,10000);

// setInterval(fun, 10000);   



// JavaScript Local Storage
// localStorage.setItem('name','Mayank JIndal')
// localStorage.getItem('name')
// localStorage.remove('name')
// localStorage.clear()




// JSON- Javascript Object Notation

// var obj = { name: "Econ", roll: "102", yr: 15 };
// console.log(obj);

// jso=JSON.stringify(obj)
// console.log(typeof jso);


















// alert("Can I get a Hauuuuyaaaaah!")
// alert(und)
// alert("HI",jjj)
// alert(a+b-31)
// console.log(arr)
// console.log(s,s2,df,"Marks", marks);
// console.log(marks)
// console.log("Harder Daddy !",90-21,"Yes")
// console.log(e);

// Write js at end of body

// JS CONSOLE API:

// document.write("Thisis an example of write usingjs")
console.warn("Dont masturparade too much brooooo")
// console.error("Jammed");