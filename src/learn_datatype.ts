//primitive datatypes
    //strings 
        let username: string="Venkatesh"
    //number
        let age: number=35
    //boolean
        let isLoggedIn: boolean=true
        let hasError: boolean=true

        console.log(username);
        console.log(age);
        console.log(isLoggedIn," ",hasError);
    //arrays
    //let keyword1="organic";
    //let keyword2="fresh";
    //let keyword3="grocery";
    //let keyword4="store";

    let searchKeywords: string[] =["organic","fresh","grocery","store"]
    let quantities:number[]=[1,2,3]
    //let quantities=[1,2,3,"four"] //this is possible no error
    quantities.push(4);
    console.log(quantities)

    //objects
    let user={
            name1:"Venkatesh",
            email:"villa.venkatesh@gmail.com",
            role:"admin",
            login_status:true
    }

    console.log(user.name1)
    console.log(user.email)
    console.log(user.role)
    console.log(user.login_status)

    let user2:{
            name1:string
            email:string 
            role:string 
            login_status:boolean
            age?:number
    }
    
    user2={
            name1:"Venkatesh",
            email:"villa.venkatesh@gmail.com",
            role:"admin",
            login_status:true,
            age:35
    }

    console.log(user2)

    let config:{baserURL:string
               timeOut:number
               role?:string[]
    }={
        baserURL:"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
        timeOut:5000,
        role:["admin","user","editor"]
    }

    console.log(config)
