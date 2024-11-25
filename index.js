// const user = document.getElementById("text");
//    user.innerText = "Welcome Dom"
// .innerHTML = "Welcome Dom"
// console.log(user);



// innerhtml -add string as well as html element
// innerText -add only the string

// creating
//  let user1 = document.getElementById("menu");
// console.log(user1);

// let users = document.createElement("h1");
// users.innerText = "welcome guys";
// users.setAttribute("style", "color:white;background-color:red;text-align:center ")



// user1.appendChild(users)

// // apendChild will Append only dom node

// let user = document.createElement("h1");
// user.innerText = "welcome guys";
// user.setAttribute("style", "color:white;background-color:red;text-align:center ")


// user1.append(user,"welcome")

// append string as well as Dom Node







// let user = document.getElementsByClassName("listItems");
// console.log(user);

//  for(let i =0; i<user.length;i++){
//      console.log(i)
//  user[i].append(i);
//  }


// let tag = document.getElementsByTagName("li");


// for(let i in tag){
//     console.log(tag[i]);

// }





// Day 2
// let count = 0;

// let names = ["aji", "mano", "kumar", "sasi"]

// let generate = () => {
//     console.log(`Button is clicked ${++count} times`);

//     let main = document.getElementById("main");
//     main.innerText = ""
//     let ul = document.createElement("ul");

//     let user = names.forEach((e) => {
//         let li = document.createElement("li");
//         li.innerText = e;
//         ul.append(li);
//     })

//     main.append(ul)
// }

// let clearcatch = () => {
//     let main = document.getElementById("main");
//     main.innerText = "";
// }






// let myform = document.getElementById("myform");

// // console.log(myform);

// myform.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("form submited");

//     let fname = document.getElementById("fname").value;
//     let lname = document.getElementById("lname").value;

//     console.log({ fname, lname });

//     let display = document.getElementById("display");

//   display.innerText = "";
//     display.innerHTML =`<h1>Submited Data</h1>
//     <div>First Name :<strong> ${fname}</strong></div>
//     <div>First Name :<strong> ${lname}</strong></div>`

// })

myForm.addEventListenter("submit",(e) => {
    e.preventDefault();

    let formdata = new FormData(myForm)
})