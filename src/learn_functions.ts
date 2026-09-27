type productinfo={
    name:string
    price:number
    category:string
}

let productInfoObj={
    name:"apple juice",
    price:200,
    category:"fruit juices"
}

function printProductInfo(productinformation:productinfo){
    console.log(productinformation.name);
    console.log(productinformation.price);
    console.log(productinformation.category);
}

printProductInfo(productInfoObj);

//calling a function inside a function
function formatProductName(name:string): string{
    return name.toUpperCase();
}

function processProduct(name:string): void{
    console.log("Processing product")
    let formatedName=formatProductName(name)
    console.log("Searching the formatted product name...",formatedName)
}

processProduct("tea");

//anonymous functions
let message=function (): void{
    console.log("the message is ....")
}

message();

//anonymous function inside a inbuilt function
setTimeout(function (): void{
    console.log("the second message is ....")
},2000);

//arrow function
// function formatCategory (category:string): string {
//       return category.toLowerCase();
// }

let formattedCategory1 =(category:string): string => category.toLowerCase();
console.log("the formattedcotegory1 is ",formattedCategory1("VENKATESH"))

let formattedCategory =(category:string): string =>{
      return category.toLowerCase();
}

let actualCategory="ORGANI"

if(formattedCategory(actualCategory)==='organic'){
    console.log("test is passed");
}else{console.log("test is failed")

}

let doublePrice=(price:number): number=>price*2;
console.log(doublePrice(20));

//callback function
    /* A callback function in TypeScript is a function passed into another function as an argument, 
        which is then executed after some operation or event completes. */
// Define the callback type directly in the parameter signature

//Example 1 normal function as callback
  function processProduct2(name: string ,action: Function):void {
        console.log(name)
        action()
  }

  processProduct2("Venkatesh",function() {
        console.log("Processed in 2nd function...")
  })

  //Example 2 arrow function as callback
  function processProduct3(name: string ,action: Function):void {
        console.log(name)
        action()
  }

  processProduct3("Venkatesh",()=>{
    console.log("Processed in 3rd function...")
  })

  //Example 3 call back with return value
  function processPrice(price:number,action: Function): void{
    let result=action(price)
    console.log(result)
  }

  processPrice(100,function(p:number ):number {
    return p*0.9;
  })

   //Example 4 arrow call back with return value
  function processPrice2(price:number,action: Function): void{
    let result=action(price)
    console.log(result)
  }

  processPrice2(100,(p:number ):number=> {
    return p*0.9;
  })


  //Example 5 call back with return value from main function
  function processPrice5(price:number,action: Function): number{
    let result=action(price)
    return result
  }

  let finalResult=processPrice5(100,(p:number ):number=> {
    return p*0.9;
  })

  console.log("main function return value is ",finalResult)

