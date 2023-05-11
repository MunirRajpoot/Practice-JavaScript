function userAuthentication() {
    var user = { // data get from email and password field
        email: "munir86@gmail.com",
        password: "munir786",
    };

    var users = [  // data get from database
        {
            email: "munir86@gmail.com",
            password: "munir786",
        },
        {
            email: "something@gmail.com",
            password: "asdf",
        },
    ];

    let authenticated = false;

    for (let i = 0; i < users.length; i++) {  //users[1]     1
        if (users[i].email == user.email && users[i].password == user.password) {   // used for checking email and password exist or not
            authenticated = true;
        }
    }

    if (authenticated == true) {
        console.log("login successfuly!");
        alert("Login Successfully");
    } else {
        console.log("invalid email or password");
    }
}

console.log(userAuthentication())