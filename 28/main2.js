// let user = {
//     userName: null,
//     lastName: null,
//     age: null,
//     hobby: null,
//     city: null
// };

// for (const key in user) {
//     user[key] = prompt(`Enter ${key}`);
// }

// for (const key in user) {
//     alert(`${key} = ${user[key]}`)
// }

// console.log(user);


// let adminUser = {
//         userName: "hanna",
//         password: "******",
//         email: "sjvnfji@slkvsdl.com"
//     };

// let regularUser = {};

// for (let clone in adminUser) {
//     adminUser[clone] = regularUser[clone];
// }

// regularUser.password = "654123";

// console.log(adminUser);
// console.log(regularUser);
    

// console.log("Main:", adminUser);

// let doClone = (adminUser) => {
//     let newObj = {};
//     for (const key in adminUser) {
//         newObj[key] = adminUser[key];
//     }

//     return newObj
// };

// regularUser = doClone(adminUser);

// console.log("Clone:", regularUser);

// regularUser.userName = "Serg";
// console.log("Clone:", regularUser);


// let user = {
//     name: "hanna",
//     password: "****",
//     login: function() {
//         console.log("Anything");
//     },
//     signIn() {
//         return `${this.name}`;
//     },
//     signUp: () => {
//         return `${this.password}`;
//     }
// };

// user.login();
// console.log(user.signIn());
// user.signUp();


