const user = {
    username: "Nischal Paliwal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: () => {
        console.log("User details fetched from the database!");
    }
}

console.log(user.loginCount);
user.getUserDetails();

const customerDetails = (name, age, username, password) => {
    this.name = name;
    this.age = age;
    this.username = username;
    this.password = password;

    return this;
}

console.log(customerDetails("Nischal Paliwal", 20, "nischalpaliwal7", "12344rifi"));