// CHAPTER 17-20


// //  NO. 01
// var multi_dim = [
//       [1, 2, 3],
//       [4, 5, 6]
//   ];

//   //  NO. 02
//   var multi_dim2 = [
//       [0, 1, 2, 3],
//       [1, 0, 1, 2],
//       [2, 1, 0, 1]
//   ];

//   //  NO. 03
//   var i;
//   for (i = 1; i < 11; i++) {
//       document.write(i + '<br>');
//   }

//   // NO. 04
//   var table_num = parseInt(prompt('Enter a number to show its multiplication table: '));
//   var table_lenght = parseInt(prompt('Enter lenght of multiplication table: '));
//   var i;
//   document.write(`<h2>Table of ${table_num} </h2>`);
//   document.write(`<h2>Lenght of table is ${table_lenght} </h2>`);
//   for (i = 1; i < table_lenght + 1; i++) {
//       document.write(`${table_num} x ${i} = ${table_num * i} <br>`);
//   }

//   // NO. 05
//   fruits = ['apple', 'mango', 'banana', 'orange', 'pineapple'];
//   for (var i = 0; i < fruits.length; i++) {
//       document.write(fruits[i] + '<br>');
//   }
//   for (var i = 0; i < fruits.length; i++) {
//       document.write(`Element at index ${fruits.indexOf(fruits[i])} is ${fruits[i]} <br>`);
//   }

//   // NO. 06
//   arr_counts = [];
//   for (let i = 1; i < 16; i++) {
//       arr_counts.push(i);
//   }
//   document.write(`Counting: ${arr_counts} <br>`);

//   arr_reverse = [];
//   for (let i = 10; i > 0; i--) {
//       arr_reverse.push(i);
//   }
//   document.write(`Reverse Counting: ${arr_reverse} <br>`);

//   arr_even = [];
//   for (let i = 0; i < 21; i += 2) {
//       arr_even.push(i);
//   }
//   document.write(`Even: ${arr_even} <br>`);

//   arr_odd = [];
//   for (let i = 1; i < 21; i += 2) {
//       arr_odd.push(i);
//   }
//   document.write(`Odd: ${arr_odd} <br>`);

//   arr_series = [];
//   for (let i = 2; i < 21; i += 2) {
//       arr_series.push(i + 'K');
//   }
//   document.write(`Series: ${arr_series} <br>`);

//   // NO. 07
// A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// user_search = prompt('Welcome to ABC Bakery. What do you want to order?');
// if (user_search != 'cake' && user_search != 'apple pie' &&
//  user_search != 'cookie' && user_search != 'chips' && 
//  user_search != 'patties') {
//     alert(`${user_search} is not available in our bakery`);
// }

// for (let i = 0; i < A.length; i++) {
//     if (user_search == A[i]) {
//         alert(`${A[i]} is available at index ${A.indexOf(A[i])} in our bakery`);
//         break;
//     }
// }


// No. 8

// var arr = [24,53,78,91,12];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// document.write('Array items : '+ arr+ '<br>');
// document.write('The largest number is : '+ largest);

//No.9
// var arr = [24,53,78,91,12];
// var smallest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (smallest > arr[i] ) {
//         smallest = arr[i];
//     }
// }
// document.write('Array items : '+ arr+ '<br>');
// document.write('The smallest number is : '+ smallest);

//NO 10 


// for(var i = 1; i<=20;i++){
//     document.write(i*5+ " ");
// }


                                        //chapter21-25



// TASK 01

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname= firstname+" "+lastname;
// alert("Welcome"+" "+fullname);


// TASK 02

// var mobile = prompt("Enter your favourite mobile phone model:");
// var los = mobile.length;
// document.write("My favourite mobile phone is:"+" "+mobile);
// document.write("<br> Length of string:"+" "+los);


// TASK 03

// var word = "Pakistani";
// document.write("String:"+" "+word);
// document.write("<br> The position of n is:"+" "+word.indexOf("n"));


// TASK 04

// var a = "Hello World";
// document.write("String:"+" "+a);
// document.write("<br> Last index of l is:"+" "+a.lastIndexOf("l"));


// TASK 05

// var word = "Pakistani";
// document.write("String:"+" "+word);
// document.write("<br>Character at index 3:"+" "+ word[3]);


// TASK 06

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname = firstname.concat(lastname);
// alert("Welcome"+" "+fullname);


// TASK 07

// var city = "Hyderabad";
// var rep = city.replace("Hyder", "Islam");
// document.write("City:"+" " +city);
// document.write("<br> After replacement:"+" " + rep);


//TASK 08

// var text = "Ali and Sami are best friends. They play cricket and football together"
// var rep =text.replace(/and/g, "&");
// document.write(rep);


//TASK 09

// var numstr ="472";
// document.write("Value : "+ numstr+"<br>"+"type : ");
// document.write(typeof numstr);
// var numint =Number(numstr);
// document.write("<br>Value : "+ numint+"<br>"+"type : ");
// document.write(typeof numint);


//TASK 10

// var inp = prompt("Enter lowercase input:");
// document.write("User input : "+inp);
// var casechange =inp.toUpperCase();
// document.write("<br> Upper case : "+casechange);


//TASK 11

// var inp = prompt("enter lowercase input");
// document.write("User input : "+inp+"<br>");
// var a= inp.slice(0,1);
// var a = a.toUpperCase();
// //document.write(a);
// var inp =inp.slice(1,inp.length);
// var b= a.concat(inp);
// document.write("<br>Titel case : "+b);



//TASK 12

// var num =35.36;
// document.write("Number : "+num)
// var str =num.toString()
// var c =str.replace(".","");
// document.write("<br> Result  : "+c)



//TASK 13

// var name = prompt("Enter your name:");
// for (var i = 0; i < name.length; i++) {
// 	a = name.charAt(i)
// 	a=a.charCodeAt(0)
// 	if (a ==33 || a==44 || a==46 || a==64){
// 		alert("Enter a valid username !");
// 	}
// }



//TASK 14

// var items=["cake","apple pie","cookie","chips","patties"]
// document.write(items+"<br>")
// var order = prompt("Welcome to our bakery !! What do you want to order sir/ma'am ?? ")
// order=order.toLowerCase()
// function find(order){
// 	for (var i =0 ; i< items.length; i++){
// 	if (items[i]==order) {
// 		document.write(items[i]+" item is <strong>avaliable</strong> at index "+i+" in our bakery")
// 		return;
// 	}
// }
// document.write("we are sorry "+order+" is <strong>not avaliable</strong> in our bakery")
// }
// find(order)



//TASK 15

// var a = prompt("Enter Password<br>");
// pswrdcheck(a);
// function pswrdcheck(a){
// 	var b= a.slice(0,1)
// 	b=b.charCodeAt(0)
// 	var c = a.length
// 	var cont = 1
// 	str =false;
// 	int =false;
// 	if (b >= 48 && b<=57) {
// 		document.write("Password can not begin with a number<br>Please Enter a valid password");
// 		return;
// 	}
// 	else if (c<6){
// 		document.write("Password is short<br>Please Enter a valid password");
// 		return;
// 	}
// 	for (var i = 1; i < a.length; i++){
// 		var d =a.charAt(i)
// 		if (d >= 48 && d<=57) {
// 			int = true;
// 		}
// 		if (d>= 65 && d <=90 || d>=97 || d<=122 ) {
// 			str = true
// 		}
// 	}
// 	if (!str && !int) {
// 		document.write("Password must contain Alphabet and Number both<br>Please Enter a valid password")
// 		return
// 	}
// }



//TASK 16

// var university ="University of Karachi";
// var str = []
// var str =university.split('');
// for (var i = 0; i < str.length; i++) {
// 	document.write(str[i]+"<br>")
// }


//TASK 17

// var a = prompt("Enter input");
// document.write("User Input: "+a)
// var b= a.charAt(a.length-1)
// document.write("<br>last Character of input : "+b)


//TASK 18

// var a ="the quick brown fox jumps over the lazy dog"
// document.write("there are "+a.match(/the/g).length+" occurences of word the")







