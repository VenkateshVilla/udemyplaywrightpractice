let name1:string="Venkatesh"
let name2:string='Villa'
console.log(`my name is ${name1} ${name2}`)
let productTitle:string="Organic Almonds";

//getting length of string
console.log(productTitle.length)

//Changing case
let actualProduct="Organic Almonds"
let expectedProduct="organic almonds"

if(actualProduct.toLowerCase()==expectedProduct.toLowerCase()){
    console.log("Product Verified")
}

//Checking if string contains text
let url= 'https://qa-cart.com/demoshop/'

if(url.includes('demoshop')){
    console.log("user clicked demoshop");
}
if(url.endsWith('demoshop')){
    console.log("user endswith demoshop");
}

if(url.startsWith('https://')){
    console.log("user startswith https");
}

//Extracting part of a string
let orderMessage:string="Thank you. Your order number 7725 has been received."
console.log(orderMessage.substring(16,33));

//replacing a character
orderMessage=orderMessage.replace('order','Order');
console.log(orderMessage)

//Splitting a string
let category:string="Grocery,Fruits,Organic";
let categorysplitlist:string[]=category.split(',');

categorysplitlist.forEach((categorysplitpiece,index)=>{
     console.log(`${index}: ${categorysplitpiece}`);
     
})
console.log()
categorysplitlist.forEach((categorysplitpiece)=>{
     console.log(`${categorysplitpiece}`);
     
})
console.log()
for(let categorysplitpiece in categorysplitlist){
     console.log(categorysplitlist[categorysplitpiece]);
}
console.log()
for(let categorysplitpiece of categorysplitlist){
    console.log(categorysplitpiece);
}

let username=" Venkatesh Villa ";
console.log("before trim :" ,username.length);
console.log(username.trim().length);

//Template Strings
let product:string="Organic Almonds"
let price:number=30
console.log(`The product is ${product}, and the price is ${price}`)

//using blakslash () in strings
let message="user said \"login failed\"";
console.log(message);

//double quotes included with in string
let message2='user said "login failed"';
console.log(message2);








