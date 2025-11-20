const addFriend = document.querySelector("#add");
const istatus = document.querySelector(".card h5");

let check = 0;

addFriend.addEventListener("click", function(){
  console.log(check);
  if(check ===  0){
    istatus.innerHTML = "Friend 😍";
    istatus.style.color = "green"

    addFriend.innerHTML = "Remove Friend"
    check++
  }else{
    istatus.innerHTML = "Stranger 🤔";
    istatus.style.color = "red"
    addFriend.innerHTML = "Add Friend"
    check = 0
  }
})


