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

const customerDetails = () => {
    
}