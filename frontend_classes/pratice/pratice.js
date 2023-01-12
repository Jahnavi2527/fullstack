//function CheckEven(){
//  var n=prompt("write a number");
//    if(n%2===0){
//        document.write("number is even")
  //  }
    //else{
//        document.write("number is odd")
  //  }
//}

//function CheckEven(){
  //  var output= document.getElementById("output");
//    var n=20;
//    if(n%2===0){
  //      output.innerHTML="number is even";
   // }
//    else{
 //       output.innerHTML="nuber is odd";
   // }
//}

// function CheckEven(n){
//     if(n%2===0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// CheckEven(35);

// function add(a,b){
//     console.log(a+b)
// }
// add(20,10);

//function add(a,b,c){
//    console.log(a+b)
//    console.log(c)
//}
//add(20,30,"janu");
//add(20,30);

//function add(a,b){
//console.log(a+b);
//}
//var result= add(8,9);
//console.log(result)
//var result2= add(5,3);
//console.log(result2)

//function SayHello(msg){
//  return function greet(){
//    console.log("hello", msg)
//  }
//}
//console.log(SayHello());

//function SayHello(msg){
//  return function greet(){
//  console.log("hello",msg)
//  }
//}
//var result= SayHello();
//console.log(result());

//function add(a,b=2){
//  console.log(a+b)
//}
//add(2);
//add(10,20);

//function add(){
//console.log(arguments)
//}
//console.log(add(2));
//console.log(add(10,20,30,40,50,60))

//function add(){
//  for(i=0;i<arguments.length;i++){
//    console.log(arguments[i])
//  }
//}
//console.log(add(2));
//console.log(add(10,20,30,40,50,60));

//function add(){
 // var s=0;
 // for(i=0;i<arguments.length;i++){
//    s=s+arguments[i];
//  }
//    return s;
//}
//console.log(add(2));
//console.log(add(10,20,30,40,50,60));

//var age=20;
//console.log(age);
//function janu(){
 // console.log(age);
//}
//janu();

//var age=20;
//console.log(age);
//function janu(){
//  var x=30;
//  console.log(x);
//}
//janu();
//console.log(x)

//console.log(x)
//var x=10;
//console.log(x)

//function greet(){
//  console.log("hello gm")
//}
//function SayHello(){
//  console.log("hello")
//}
//console.log(greet);

//function greet(){
//  console.log("hello gm")
//}
//function SayHello(){
//  console.log("hello")
//}
//console.log(greet());

//let user={
//  ``name:"jahnavi",
//  age:20,
//  bank: "ICIC",``
//}
//console.log(user.name);

// let  user={
//   name:"jahnavi",
//   age:20,
//   bank:"icic",
//   laptop:{
//       brand:"dell",
//       ram:4,
//       cpu:"i5"
//   }
// } 
// console.log(user.laptop.cpu);

// let laptop={
//   brand:"hp",
//   cpu:"i3",
//   ram:4,
// come: function(){
//         console.log(laptop,this);
//   }
// }
// come();

// var user={
//   name:"test",
//   age:20,
//   show :function(){
//     //console.log(this.name)
//   }
// }
// //user.show();

// var user2={
//   name:"test2",
// }
// //user.show.call(user2);
// // user.show.apply(user);
// var returnfn= user.show.bind(user2);
// console.log(returnfn())

// let employee1={
//   name:"janu",
//   age:20,
//   address:"hyd",
//   employeeinfo:function(){
//     console.log("name=",this.name);
//     console.log("age=",this.age);
//     console.log("address=",this.address);
//   }
// }
// //employee1.employeeinfo();
// let employee2={
//   name:"jahnavi",
//   age:22,
//   address:"blng",
// }
// //employee1.employeeinfo.call(employee2);
// //employee1.employeeinfo.apply(employee2);
//  let fn= employee1.employeeinfo.bind(employee2);
//  console.log(fn());

// function emp(name,age){
//   this.name=name;
//   this.age=age;
// }
// let emp1=new emp("janu",20);
// let emp2=new emp("jahnavi",22);
// console.log(emp1,emp2);

// function emp(name,age){
//   this.name=name;
//   this.age=age
//   this.displayinfo=function(){
//     console.log("info=",this.name,this.age);
//   }
// }
// let emp1=new emp("janu",20);
// let emp2=new emp("jahnavi",22);
// emp1.displayinfo();
// emp2.displayinfo();

// let a1=[1,2,3,4,5,6];
// let a2=[1,2,true,"jahnavi"]
// console.log(a1)
// console.llog(a2)

// let a1=[1,2,3,4,5];
// a1.shift();
// console.log(a1);

// let a2=[1,2,3,4,5];
// a2.pop();
// console.log(a2);

// let a3=[1,2,3,4,5];
// a3.unshift(0);
// console.log(a3);

// let a4=[1,2,3,4,5];
// a4.push(6);
// console.log(a4);

// let a1=[1,2,3,4,5,5,5,5,6,7,8,9];
// let index=a1.indexOf(5)
// console.log(index);
// a1.splice(index,3);
// console.log(a1);

// let str=("I'm jahnavi mudiyala");
// console.log(str.length);

// let str1="hello";
// let str2="world";
// console.log(str1+str2);
// console.log(str1+" "+str2);

// let str=("i'm jahnavi mudiyala");
// str1=str.replace("mudiyala","sai");
// console.log(str1);
// console.log(str1.charAt(4));

// function sayHello(){
//   console.log("hello");
// }
// function greet(msg,fn){
//   console.log("hello from greet",msg);
//   fn();
// }
// greet("gud mrng",sayHello);


// function sayHello(){
//   console.log("hello");
// }
// function greet(fn){
//   console.log("hello from greet",);
//   fn();
// }
// setTimeout(greet,3000,sayHello);

// function sayHello(callback1,callback2){
//   console.log("hello from janu");
//   callback1(callback2);
// }
// function get(callback2){
//   console.log("recieved");
//   callback2();
// }
// function typed(){
//   console.log("deleted");
// }
// sayHello(get,typed);
// console.log("j")

// const obj={a:'one',b:'two',a:'three'};
// console.log(obj);

function sort(arr,N){
  for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
      if(arr[i]>arr[j])
      var t=arr[i];
      arr[i]=arr[j];
      arr[j]=t;
    }
    console.log(arr[0,2,1,2,0])
  }
}
sort([0,2,1,2,0],5);
