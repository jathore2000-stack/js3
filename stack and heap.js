// Stack (Primitive)(changes made in the copy, it supplies copies), Heap memory (non-primitive) (changes are made in the original)
// can we manually do assigned stack or heap memory to elements
// yeah , ofcourse that is actually the programming means
//=============== Stack memory================================

// when we do som1= som2 then in stack we just assign copyof som2 any changes may apply according to that innext variable or same som1 variable not in original.
let myYoutubename = "hiteshchoudharyyt"

let anothername = myYoutubename
 anothername= 'chai and code'

console.log(anothername)
console.log(myYoutubename)

//========================== Heap Memory ============================

//if some class is assigned in heap memory if we reference that to another variable then
//whatever we make changes that changes occurs in the original

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "satyam@googole.com"

console.log(userOne)
console.log(userTwo)

