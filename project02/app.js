const cont = document.querySelector(".card img")
const love = document.querySelector("#love")
const loveCl = document.querySelector(".card i")

let count = 0

cont.addEventListener("dblclick", function(){
  if(count === 0){
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = "1"
    count++
  }else{
    love.style.transform = "translate(-50%, -50%) scale(0)"
    love.style.opacity = "0"
    count = 0
  }
  loveCl.classList.toggle('ri-heart-fill');
  loveCl.classList.toggle('ri-heart-line');
  loveCl.classList.toggle('insta-love');

  setTimeout(function(){
    love.style.transform = "translate(-50%, -50%) scale(0)"
    love.style.opacity = "0"
  },2000)
})


loveCl.addEventListener("click", function(){
  if(count === 0){
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = "1"
    count++
  }else{
    love.style.transform = "translate(-50%, -50%) scale(0)"
    love.style.opacity = "0"
    count = 0
  }
  loveCl.classList.toggle('ri-heart-fill');
  loveCl.classList.toggle('ri-heart-line');
  loveCl.classList.toggle('insta-love');


  setTimeout(function(){
    love.style.transform = "translate(-50%, -50%) scale(0)"
    love.style.opacity = "0"
  },2000)
})
