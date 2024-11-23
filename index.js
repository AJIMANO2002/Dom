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


let tag = document.getElementsByTagName("li");


for(let i in tag){
    console.log(tag[i]);
    
}
