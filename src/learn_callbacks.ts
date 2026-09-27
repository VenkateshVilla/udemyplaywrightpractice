//simple callback
function greet1(name:string,callback:()=>void):void{
    console.log(`Hello ${name}`)
    callback()
}

function goodBye():void{
    console.log("GoodBye");
}

greet1('Venkatesh',goodBye);

//simple callback taking parameters
function greet2(
    name:string , 
    callback:(message:string)=>void):void{
    //console.log(`Hello ${name}`)
    const message=`Hello ${name}`;
    callback(message);
}

greet2('Venkatesh',(message)=>{
    console.log(message);
})

//callback that returns a value

function calculate(
    a:number,
    b:number,
    operation:(x:number,y:number)=>number
): number{ 
    return operation(a,b);
}

const result=calculate(5,5,(x,y)=>{
    return x+y;
})

console.log(result)

//callback using a named function
function calculate2(
    a:number,
    b:number,
    callback:(x:number,y:number)=>number
): number{ 
    return callback(a,b);
}

function add(a: number, b: number): number {
    return a + b;
}
const result2 = calculate2(10, 20, add);

console.log(result2);

//Array forEach() callback
const employees: string[] = [
    "Venkatesh",
    "Ravi",
    "John"
];

employees.forEach((employee) => {
    console.log(employee);
});

//map() callback
const numbers: number[] = [1, 2, 3, 4];

const doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);

//filter() callback
const numbers: number[] = [10, 15, 20, 25, 30];

const result = numbers.filter((number) => {
    return number > 20;
});

console.log(result);

//reduce() callback
const numbers: number[] = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);

//Callback with setTimeout()  This is a good example of an asynchronous callback.
console.log("Start");

setTimeout(() => {
    console.log("Inside callback");
}, 2000);

console.log("End");

//