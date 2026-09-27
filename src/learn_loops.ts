for(let i:number=0;i<=10;i++){
    if(i==2){
        continue;
    }

    if(i==3){
        break;
    }
    console.log(i);
    console.log();
}

let browsers:string[]=["chromium","webkit","firefox"]
for(let i:number=0;i<browsers.length;i++){
    console.log(browsers[i])
    console.log()
}

for(let browser of browsers){
    console.log(browser)
    console.log()
}

for(let browser in browsers){
    console.log(browsers[browser]) //here browser will represent the index number 0,1,2
    console.log()
}

browsers.forEach((browser, index) => {
    console.log(`${index}: ${browser}`); // Gives you both value and index cleanly
});

let retries:number=3
while(retries>0){
    console.log("retrying login...")
    retries--;
}

let count:number=0
do{
    console.log("login once")
    count++
}while(count<10)